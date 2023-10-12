import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as h,a as t,b as i,d as n,e as s}from"./app-cc40342e.js";const o={},c={class:"hint-container warning"},b=t("p",{class:"hint-container-title"},"注意",-1),l=s('<h2 id="发送私聊消息" tabindex="-1"><a class="header-anchor" href="#发送私聊消息" aria-hidden="true">#</a> 发送私聊消息</h2><p>该接口用于发送私聊消息。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/send_private_msg</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>是</td><td>QQ 号</td></tr><tr><td>message</td><td>string</td><td>是</td><td>消息内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>否</td><td>是否解析 CQ 码。</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>time</td><td>int64</td><td>时间戳</td></tr></tbody></table><h2 id="发送群聊消息" tabindex="-1"><a class="header-anchor" href="#发送群聊消息" aria-hidden="true">#</a> 发送群聊消息</h2><p>该接口用于发送群聊消息。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/send_group_msg</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>是</td><td>群号</td></tr><tr><td>message</td><td>string</td><td>是</td><td>消息内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>否</td><td>是否解析 CQ 码。</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>time</td><td>int64</td><td>时间戳</td></tr></tbody></table><h2 id="发送消息" tabindex="-1"><a class="header-anchor" href="#发送消息" aria-hidden="true">#</a> 发送消息</h2><p>该接口用于发送消息。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/send_msg</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_type</td><td>string</td><td>是</td><td>消息类型</td></tr><tr><td>user_id</td><td>int64</td><td>是</td><td>QQ 号</td></tr><tr><td>group_id</td><td>int64</td><td>是</td><td>群号</td></tr><tr><td>discuss_id</td><td>int64</td><td>是</td><td>讨论组号</td></tr><tr><td>message</td><td>string</td><td>是</td><td>消息内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>否</td><td>是否解析 CQ 码。</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当前发送消息的 API 暂不支持发送讨论组消息。</p></div><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>time</td><td>int64</td><td>时间戳</td></tr></tbody></table><h2 id="获取消息" tabindex="-1"><a class="header-anchor" href="#获取消息" aria-hidden="true">#</a> 获取消息</h2><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/get_msg</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>是</td><td>消息 ID</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>time</td><td>int64</td><td>时间戳</td></tr><tr><td>message_type</td><td>string</td><td>消息类型</td></tr><tr><td>message_id</td><td>int32</td><td>消息 ID</td></tr><tr><td>real_id</td><td>int32</td><td>真实 ID</td></tr><tr><td>sender</td><td>Object&lt;<a href="#sender">Sender</a>&gt;</td><td>发送人信息</td></tr><tr><td>message</td><td>object</td><td>消息体</td></tr><tr><td>group_id</td><td>int64</td><td>群号</td></tr></tbody></table><h4 id="sender" tabindex="-1"><a class="header-anchor" href="#sender" aria-hidden="true">#</a> Sender</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>QQ 号</td></tr><tr><td>nickname</td><td>string</td><td>昵称</td></tr><tr><td>sex</td><td>string</td><td>性别</td></tr><tr><td>age</td><td>int32</td><td>年龄</td></tr><tr><td>uid</td><td>string</td><td>UID</td></tr></tbody></table><h2 id="撤回消息" tabindex="-1"><a class="header-anchor" href="#撤回消息" aria-hidden="true">#</a> 撤回消息</h2><p>该接口用于撤回消息。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_msg</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>message_id</td><td>int32</td><td>是</td><td>消息 ID</td></tr></tbody></table><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。。</p>',42);function p(_,g){const d=a("Badge");return r(),h("div",null,[t("div",c,[b,t("p",null,[i("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),n(d,{text:"未实现",type:"danger",vertical:"baseline"})])]),l])}const f=e(o,[["render",p],["__file","message.html.vue"]]);export{f as default};
