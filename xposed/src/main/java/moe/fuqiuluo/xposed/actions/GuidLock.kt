package moe.fuqiuluo.xposed.actions

import android.content.Context
import moe.fuqiuluo.utils.MMKVFetcher
import moe.fuqiuluo.xposed.tools.hex2ByteArray
import moe.fuqiuluo.xposed.tools.hookMethod
import oicq.wlogin_sdk.tools.util

internal class GuidLock: IAction {
    override fun invoke(ctx: Context) {
        val guildLock = MMKVFetcher.mmkvWithId("guid")
        val utilClass = util::class.java
        utilClass.hookMethod("needChangeGuid").before {
            if (guildLock.getString("guid", null) != null) {
                it.result = false
            }
        }
        utilClass.hookMethod("getGuidFromFile").before {
            val guid = guildLock.getString("guid", null)
            if (guid != null) {
                it.result = guid.hex2ByteArray()
            }
        }
        utilClass.hookMethod("saveGuidToFile").before {
            val guid = guildLock.getString("guid", null)
            if (guid != null) {
                it.args[1] = guid.hex2ByteArray()
            }
        }

        utilClass.hookMethod("get_last_guid").before {
            val guid = guildLock.getString("guid", null)
            if (guid != null) {
                it.result = guid.hex2ByteArray()
            }
        }

        utilClass.hookMethod("generateGuid").before {
            val guid = guildLock.getString("guid", null)
            if (guid != null) {
                it.result = guid.hex2ByteArray()
            }
        }
    }
}