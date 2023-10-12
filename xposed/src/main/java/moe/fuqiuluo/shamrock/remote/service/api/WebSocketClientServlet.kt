@file:OptIn(DelicateCoroutinesApi::class)
package moe.fuqiuluo.shamrock.remote.service.api

import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.encodeToJsonElement
import moe.fuqiuluo.shamrock.remote.action.ActionManager
import moe.fuqiuluo.shamrock.remote.action.ActionSession
import moe.fuqiuluo.shamrock.remote.entries.EmptyObject
import moe.fuqiuluo.shamrock.remote.entries.Status
import moe.fuqiuluo.shamrock.remote.entries.resultToString
import moe.fuqiuluo.shamrock.remote.service.config.ShamrockConfig
import moe.fuqiuluo.shamrock.tools.*
import moe.fuqiuluo.shamrock.helper.Level
import moe.fuqiuluo.shamrock.helper.LogCenter
import org.java_websocket.client.WebSocketClient
import org.java_websocket.handshake.ServerHandshake
import java.lang.Exception
import java.net.URI

internal abstract class WebSocketClientServlet(
    url: String,
    wsHeaders: Map<String, String>
) : BasePushServlet, WebSocketClient(URI(url), wsHeaders) {

    data class AllowPushRule(val stringValue: String, val regexValue: Regex)

    private var defaultPush = true
    private val pushRuleList = mutableListOf<AllowPushRule>()

    override val address: String
        get() = ShamrockConfig.getWebSocketClientAddress()

    override fun allowPush(): Boolean {
        return ShamrockConfig.openWebSocketClient()
    }

    override fun onOpen(handshakedata: ServerHandshake?) {
        LogCenter.log("WebSocketClient onOpen: ${handshakedata?.httpStatus}, ${handshakedata?.httpStatusMessage}")
        GlobalPusher.register(this)
    }

    override fun onMessage(message: String) {
        GlobalScope.launch {
            handleMessage(message)
        }
    }

    private suspend fun handleMessage(message: String) {
        val respond = kotlin.runCatching {
            val actionObject = Json.parseToJsonElement(message).asJsonObject
            if (actionObject["post_type"].asStringOrNull == "meta_event") {
                // 防止二比把元事件push回来
                return
            }

            val action = actionObject["action"].asString
            val echo = actionObject["echo"] ?: EmptyJsonString
            val params = actionObject["params"].asJsonObject

            val handler = ActionManager[action]
            handler?.handle(ActionSession(params, echo, this))
                ?: resultToString(false, Status.UnsupportedAction, EmptyObject, "不支持的Action", echo = echo)
        }.getOrNull()
        respond?.let { send(it) }
    }

    override fun onClose(code: Int, reason: String?, remote: Boolean) {
        LogCenter.log("WebSocketClient onClose: $code, $reason, $remote")
        GlobalPusher.unregister(this)
    }

    override fun onError(ex: Exception?) {
        LogCenter.log("WebSocketClient onError: ${ex?.message}")
        GlobalPusher.unregister(this)
    }

    protected inline fun <reified T> pushTo(body: T) {
        if(!allowPush() || isClosed || isClosing) return
        try {
            val sendString = GlobalJson.encodeToString(body)
            val sendJson = GlobalJson.encodeToJsonElement(body)
            val sendJsonObject = sendJson.asJsonObject
            var push = defaultPush
            run breaking@{
                pushRuleList.forEach {
                    if (sendJsonObject.containsKey(it.stringValue)) {
                        val matchResult =
                            it.regexValue.find(sendJsonObject[it.stringValue].toString())
                        if (matchResult != null) {
                            push = !push
                            return@breaking
                        }
                    }
                }
            }
            if (push) {
                send(sendString)
            }
        } catch (e: Throwable) {
            LogCenter.log("被动WS推送失败: ${e.stackTraceToString()}", Level.ERROR)
        }
    }

    fun clearPushRule(defaultPush: Boolean = true) {
        pushRuleList.clear()
        this.defaultPush = defaultPush
    }

    fun addPushRule(key: String, regex: String) {
        pushRuleList.add(AllowPushRule(key, Regex(regex)))
    }
}