package moe.fuqiuluo.shamrock.helper

import moe.fuqiuluo.qqinterface.servlet.BaseSvc
import mqq.app.MobileQQ
import java.io.File

internal object LocalCacheHelper: BaseSvc() {
    // 获取外部储存data目录
    private val dataDir = MobileQQ.getContext().getExternalFilesDir(null)!!
        .parentFile!!.resolve("Tencent")

    fun getCurrentPttPath(): File {
        return dataDir.resolve("MobileQQ/${app.currentAccountUin}/ptt").also {
            if (!it.exists()) it.mkdirs()
        }
    }

    fun getCachePttFile(md5: String): File {
        return getCurrentPttPath().resolve("$md5.amr")
    }
}