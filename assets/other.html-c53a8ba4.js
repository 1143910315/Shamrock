import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-cc40342e.js";const p={},o=t(`<h2 id="获取城市adcode" tabindex="-1"><a class="header-anchor" href="#获取城市adcode" aria-hidden="true">#</a> 获取城市ADCode</h2><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/get_weather_city_code</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>city</td><td>string</td><td>是</td><td>城市</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;adcode&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token string">&quot;广西&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;柳州&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取天气" tabindex="-1"><a class="header-anchor" href="#获取天气" aria-hidden="true">#</a> 获取天气</h2><p>该接口用于获取天气，该接口调用来自QQ官方服务。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/get_weather</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>code</td><td>string</td><td>是</td><td>ADCode</td></tr><tr><td>city</td><td>string</td><td>是</td><td>城市</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;weatherInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all_astro&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lifeindex_forecast_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;weekly_astro&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ret&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;weather_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;air_humidity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;98&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;西南风&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pubtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01:40&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatetime&quot;</span><span class="token operator">:</span> <span class="token number">1695664205</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sunrise&quot;</span><span class="token operator">:</span> <span class="token string">&quot;06:05&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sunset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18:06&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;air_info&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;forecast_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;weatherForecast&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;day_weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;阴&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;西南风&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;变向风&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sunrise_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;06:05&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sunset_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18:06&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;pubtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202309251800&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;阴天&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;203&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;day_concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;night_concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;pm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;82&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;wind_power_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatetime&quot;</span><span class="token operator">:</span> <span class="token number">1695664205</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tomorrowPrompt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weeklyPrompt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;forecast&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;day_weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;晴&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;变向风&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;变向风&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sunrise_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;06:06&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sunset_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18:04&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pubtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202309251800&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;晴&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;day_concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;night_concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;146&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;wind_power_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hourinfo_list&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;almanac&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;warning_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;lst_warning&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;last_proc_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;astro&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;area&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;adcode&quot;</span><span class="token operator">:</span> <span class="token number">110000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;area_id&quot;</span><span class="token operator">:</span> <span class="token number">101010100</span><span class="token punctuation">,</span>
    <span class="token property">&quot;en_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;update_time&quot;</span><span class="token operator">:</span> <span class="token number">1695664205</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tips_list&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lifeindex_list&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current_time&quot;</span><span class="token operator">:</span> <span class="token number">1695664515</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_weekly_astro&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;weekly_summary&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;qrcode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data:image/png;base64,...&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;poster&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.tencent.weather.share&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;autosize&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1695664515</span><span class="token punctuation">,</span>
        <span class="token property">&quot;forward&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;round&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;49441099828d62f0ded8112849bce839&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;adcode&quot;</span><span class="token operator">:</span> <span class="token number">110000</span><span class="token punctuation">,</span>
          <span class="token property">&quot;air_info&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;area&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;current_time&quot;</span><span class="token operator">:</span> <span class="token number">1695664515</span><span class="token punctuation">,</span>
          <span class="token property">&quot;forecast_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;tomorrowPrompt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;updatetime&quot;</span><span class="token operator">:</span> <span class="token number">1695664205</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weatherForecast&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;阴&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;阴天&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;203&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;西南风&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day_wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;变向风&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;night_wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;82&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pubtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202309251800&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;sunrise_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;06:05&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;sunset_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18:06&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;wind_power_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              ...
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weeklyPrompt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;update_time&quot;</span><span class="token operator">:</span> <span class="token number">1695664205</span><span class="token punctuation">,</span>
          <span class="token property">&quot;weather_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;air_humidity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;98&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;concrete_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pubtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01:40&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sunrise&quot;</span><span class="token operator">:</span> <span class="token string">&quot;06:05&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sunset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18:06&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;temper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type_id_new&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;updatetime&quot;</span><span class="token operator">:</span> <span class="token number">1695664205</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weather&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weather_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多云&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;weather_type_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;202&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;wind_direct&quot;</span><span class="token operator">:</span> <span class="token string">&quot;西南风&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;wind_power&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微风&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prompt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[分享]北京 多云 16°&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;share&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验-上传群图片" tabindex="-1"><a class="header-anchor" href="#实验-上传群图片" aria-hidden="true">#</a> [实验] 上传群图片</h2><p>该接口用于上传群聊图片, 注意该接口是上传群消息的图片，不是群文件，也不是群相册。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/upload_group_image</code></p><h3 id="请求类型" tabindex="-1"><a class="header-anchor" href="#请求类型" aria-hidden="true">#</a> 请求类型</h3><p><code>POST</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>pic</td><td>string</td><td>是</td><td>图片base64</td></tr><tr><td>sender</td><td>int64</td><td>是</td><td>QQ</td></tr><tr><td>troop</td><td>int64</td><td>是</td><td>图片发送到的群聊</td></tr></tbody></table>`,23),e=[o];function r(u,c){return s(),a("div",null,e)}const k=n(p,[["render",r],["__file","other.html.vue"]]);export{k as default};
