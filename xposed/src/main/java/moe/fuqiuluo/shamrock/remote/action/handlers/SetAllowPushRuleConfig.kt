package moe.fuqiuluo.shamrock.remote.action.handlers

import kotlinx.serialization.json.JsonArray
import moe.fuqiuluo.shamrock.remote.action.ActionSession
import moe.fuqiuluo.shamrock.remote.action.IActionHandler
import moe.fuqiuluo.shamrock.remote.service.api.WebSocketClientServlet
import moe.fuqiuluo.shamrock.tools.asJsonObjectOrNull
import moe.fuqiuluo.shamrock.tools.asStringOrNull

internal object SetAllowPushRuleConfig : IActionHandler() {
    override suspend fun internalHandle(session: ActionSession): String {
        return invoke(session.getArray("allow"), session.echo, session.webSocket)
    }

    override fun path(): String = "set_allow_push_rule_config"

    override val requiredParams: Array<String> = arrayOf("allow")

    operator fun invoke(
        allow: JsonArray,
        echo: String = "",
        webSocket: WebSocketClientServlet?
    ): String {
        webSocket?.also { ws ->
            ws.clearPushRule(false)
            allow.forEach {
                val asJsonObjectOrNull = it.asJsonObjectOrNull
                if (asJsonObjectOrNull != null) {
                    val keys = asJsonObjectOrNull.keys
                    if (keys.size == 1) {
                        val first = keys.first()
                        val second = asJsonObjectOrNull[first].asStringOrNull
                        if (second != null) {
                            ws.addPushRule(first, second)
                        }
                    } else {
                        //异常反馈到调用方
                    }
                }
            }
        }
        return ok("成功", echo = echo)
    }
}