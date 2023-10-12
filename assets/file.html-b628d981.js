import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as o,a as t,b as e,d as r,e as a}from"./app-cc40342e.js";const s={},c={class:"hint-container warning"},l=t("p",{class:"hint-container-title"},"注意",-1),_={id:"上传群文件",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#上传群文件","aria-hidden":"true"},"#",-1),b=a('<p>该接口用于上传群文件。</p><p>终结点: <code>/upload_group_file</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>file</td><td>string</td><td>本地文件路径</td></tr><tr><td>name</td><td>string</td><td>储存名称</td></tr><tr><td>folder</td><td>string</td><td>父目录ID</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在不提供 <code>folder</code> 参数的情况下默认上传到根目录</p><p>只能上传本地文件, 需要上传 <code>http</code> 文件的话请先下载到本地</p></div>',5),f={id:"删除群文件",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#删除群文件","aria-hidden":"true"},"#",-1),g=a('<p>该接口用于删除群文件。</p><p>终结点: <code>/delete_group_file</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>file_id</td><td>string</td><td>文件ID 参考 <a href="#file">File</a> 对象</td></tr><tr><td>busid</td><td>int32</td><td>文件类型 参考 <a href="#file">File</a> 对象</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div>',5),y={id:"创建群文件文件夹",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#创建群文件文件夹","aria-hidden":"true"},"#",-1),m=a('<p>该接口用于创建群文件文件夹。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>仅能在根目录创建文件夹</p></div><p>终结点: <code>/create_group_file_folder</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>name</td><td>string</td><td>文件夹名称</td></tr><tr><td>parent_id</td><td>string</td><td>仅能为 <code>/</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div>',6),v={id:"删除群文件文件夹",tabindex:"-1"},I=t("a",{class:"header-anchor",href:"#删除群文件文件夹","aria-hidden":"true"},"#",-1),F=a('<p>该接口用于删除群文件文件夹。</p><p>终结点: <code>/delete_group_folder</code></p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>文件夹ID 参考 <a href="#folder">Folder</a> 对象</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div>',4),A={id:"获取群文件系统信息",tabindex:"-1"},D=t("a",{class:"header-anchor",href:"#获取群文件系统信息","aria-hidden":"true"},"#",-1),P=a('<p>该接口用于获取群文件系统信息。</p><p>终结点: <code>/get_group_file_system_info</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>file_count</td><td>int32</td><td>文件总数</td></tr><tr><td>limit_count</td><td>int32</td><td>文件上限</td></tr><tr><td>used_space</td><td>int64</td><td>已使用空间</td></tr><tr><td>total_space</td><td>int64</td><td>空间上限</td></tr></tbody></table>',6),w={id:"获取群根目录文件列表",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#获取群根目录文件列表","aria-hidden":"true"},"#",-1),N=a('<p>该接口用于获取群根目录文件列表。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_root_files</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>files</td><td>List&lt;<a href="#file">File</a>&gt;</td><td>文件列表</td></tr><tr><td>folders</td><td>List&lt;<a href="#folder">Folder</a>&gt;</td><td>文件夹列表</td></tr></tbody></table><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> File</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int32</td><td>群号</td></tr><tr><td>file_id</td><td>string</td><td>文件ID</td></tr><tr><td>file_name</td><td>string</td><td>文件名</td></tr><tr><td>busid</td><td>int32</td><td>文件类型</td></tr><tr><td>file_size</td><td>int64</td><td>文件大小</td></tr><tr><td>upload_time</td><td>int64</td><td>上传时间</td></tr><tr><td>dead_time</td><td>int64</td><td>过期时间，永久文件恒为0</td></tr><tr><td>modify_time</td><td>int64</td><td>最后修改时间</td></tr><tr><td>download_times</td><td>int32</td><td>下载次数</td></tr><tr><td>uploader</td><td>int64</td><td>上传者ID</td></tr><tr><td>uploader_name</td><td>string</td><td>上传者名字</td></tr></tbody></table><h4 id="folder" tabindex="-1"><a class="header-anchor" href="#folder" aria-hidden="true">#</a> Folder</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int32</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>文件夹ID</td></tr><tr><td>folder_name</td><td>string</td><td>文件名</td></tr><tr><td>create_time</td><td>int64</td><td>创建时间</td></tr><tr><td>creator</td><td>int64</td><td>创建者</td></tr><tr><td>creator_name</td><td>string</td><td>创建者名字</td></tr><tr><td>total_file_count</td><td>int32</td><td>子文件数量</td></tr></tbody></table>',11),V={id:"获取群子目录文件列表",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#获取群子目录文件列表","aria-hidden":"true"},"#",-1),L=a('<p>该接口用于获取群子目录文件列表。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_files_by_folder</code></p><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>文件夹ID 参考 <a href="#folder">Folder</a> 对象</td></tr></tbody></table><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>files</td><td>File[]</td><td>文件列表</td></tr><tr><td>folders</td><td>Folder[]</td><td>文件夹列表</td></tr></tbody></table>',7),Q={id:"获取群文件资源链接",tabindex:"-1"},S=t("a",{class:"header-anchor",href:"#获取群文件资源链接","aria-hidden":"true"},"#",-1),z=a('<p>该接口用于获取群文件资源链接。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_file_url</code></p><h3 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>file_id</td><td>string</td><td>文件ID 参考 <a href="#file">File</a> 对象</td></tr><tr><td>busid</td><td>int32</td><td>文件类型 参考 <a href="#file">File</a> 对象</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>文件下载链接</td></tr></tbody></table>',7),C={id:"上传私聊文件",tabindex:"-1"},E=t("a",{class:"header-anchor",href:"#上传私聊文件","aria-hidden":"true"},"#",-1),T=a('<p>该接口用于上传私聊文件。</p><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/upload_private_file</code></p><h3 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>对方 QQ 号</td></tr><tr><td>file</td><td>string</td><td>本地文件路径</td></tr><tr><td>name</td><td>string</td><td>文件名称</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只能上传本地文件, 需要上传 <code>http</code> 文件的话请先下载至本地</p></div>',6);function j(q,G){const d=i("Badge");return n(),o("div",null,[t("div",c,[l,t("p",null,[e("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),r(d,{text:"未实现",type:"danger",vertical:"baseline"})])]),t("h2",_,[p,e(" 上传群文件 "),r(d,{text:"未实现",type:"danger"})]),b,t("h2",f,[u,e(" 删除群文件 "),r(d,{text:"未实现",type:"danger"})]),g,t("h2",y,[x,e(" 创建群文件文件夹 "),r(d,{text:"未实现",type:"danger"})]),m,t("h2",v,[I,e(" 删除群文件文件夹 "),r(d,{text:"未实现",type:"danger"})]),F,t("h2",A,[D,e(" 获取群文件系统信息 "),r(d,{text:"未实现",type:"danger"})]),P,t("h2",w,[B,e(" 获取群根目录文件列表 "),r(d,{text:"未实现",type:"danger"})]),N,t("h2",V,[k,e(" 获取群子目录文件列表 "),r(d,{text:"未实现",type:"danger"})]),L,t("h2",Q,[S,e(" 获取群文件资源链接 "),r(d,{text:"未实现",type:"danger"})]),z,t("h2",C,[E,e(" 上传私聊文件 "),r(d,{text:"未实现",type:"danger"})]),T])}const K=h(s,[["render",j],["__file","file.html.vue"]]);export{K as default};
