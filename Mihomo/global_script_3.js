/***
 * Clash Verge Rev 全局扩展脚本（懒人配置）/ Mihomo Party 覆写脚本
 * URL: https://github.com/dahaha-365/YaNet/
 */

/**
 * 整个脚本的总开关，在Mihomo Party使用的话，请保持为true
 * true = 启用
 * false = 禁用
 */
const enable = true

/**
 * 分流规则配置，会自动生成对应的策略组
 * 设置的时候可遵循“最小，可用”原则，把自己不需要的规则全禁用掉，提高效率
 * true = 启用
 * false = 禁用
 */
const ruleOptions = {
  cloudflare: true, //科赋锐
  github: true, //Github
  amazon: true, //亚马逊
  apple: true, //苹果服务
  google: true, //谷歌服务
  googlecn: true, //谷歌下载/登录
  microsoft: true, //微软服务
  openai: true, //国外AI
  mihoyodl: true, //miHoYo下载
  mihoyo: true, //miHoYo
  hoyolab: true, //miHoYo国际社区/登录
  hoyoverse: true, //miHoYo国际
  steamdl: true, //Steam下载/登录
  steam: true, //Steam商店/社区
  epicgamesdl: true, //Epic Games下载
  epicgames: true, //Epic Games商店
  spotifydl: true, //Spotify播放
  spotify: true, //Spotify登录
  youtube: true, //油管
  twitch: true, //Twitch
  tiktok: true, //抖音国际
  douyin: true, //抖音
  biliintl: true, //哔哩哔哩番剧解锁
  bilibili: true, //哔哩哔哩
  niconico: true, //niconico
  bahamut: true, //巴哈姆特/动画疯
  netflix: false, //网飞
  primevideo: false, //亚马逊prime video
  hulu: false, //Hulu
  disney: false, //迪士尼
  pixiv: true, //Pixiv
  hbo: false, //HBO
  tvb: false, //TVB
  x: true, //推特
  facebook: true, //脸书
  discord: true, //Discord
  telegram: true, //电报
  whatsapp: true, //Whatsapp
  line: false, //Line
  games: true, //游戏策略组
  japan: false, //日本网站策略组
  tracker: true, //网络分析和跟踪服务
  ads: true //常见网络广告
}

/**
 * 前置规则
 * 如果有需要前置的自定义规则，可以自行修改
 */
const rules = [
  'GEOSITE,tracker,跟踪分析',
  'GEOSITE,category-ads-all,广告过滤',
  'DOMAIN-REGEX,ads[0-9]+.*zijieapi\.com,广告过滤',
  'DOMAIN-SUFFIX,store-api.mumu.163.com,广告过滤',
  'DOMAIN-SUFFIX,mumu.nie.netease.com,广告过滤',
  'DOMAIN-SUFFIX,ip.sb,默认节点',
  'DOMAIN-SUFFIX,ipapi.co,默认节点',
  'DOMAIN-SUFFIX,ipinfo.io,默认节点',
  'DOMAIN-SUFFIX,ipwho.is,默认节点',
  'RULE-SET,applications,下载软件',
  'PROCESS-NAME,SunloginClient,DIRECT',
  'PROCESS-NAME,SunloginClient.exe,DIRECT',
  'PROCESS-NAME,AnyDesk,DIRECT',
  'PROCESS-NAME,AnyDesk.exe,DIRECT'
]

/**
 * 地区配置，通过regex匹配代理节点名称
 * regex会有一定概率误判，自己调整一下吧
 * excludeHighPercentage是排除高倍率节点的开关，只对地区分组有效
 * 倍率大于regions里的ratioLimit值的代理节点会被排除
 */
const regionOptions = {
  excludeHighPercentage: true,
  regions: [
    {
      name: '🇦🇩安道尔',
      regex: /安道尔|🇦🇩|andorra/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇪阿联酋',
      regex: /阿联酋|🇦🇪|emirates/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇫阿富汗',
      regex: /阿富汗|🇦🇫|afghanistan/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇬安提瓜和巴布达',
      regex: /安提瓜和巴布达|🇦🇬|antigua/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇮安圭拉',
      regex: /安圭拉|🇦🇮|anguilla/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇱阿尔巴尼亚',
      regex: /阿尔巴尼亚|🇦🇱|albania/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇲亚美尼亚',
      regex: /亚美尼亚|🇦🇲|armenia/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇴安哥拉',
      regex: /安哥拉|🇦🇴|angola/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇶南极洲',
      regex: /南极|🇦🇶|antarctica/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇷阿根廷',
      regex: /阿根廷|🇦🇷|argentina/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇸美属萨摩亚',
      regex: /美属萨摩亚|🇦🇸|a.+samoa/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇹奥地利',
      regex: /奥地利|🇦🇹|austria/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇺澳大利亚',
      regex: /澳大利亚|🇦🇺|australia/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇼阿鲁巴',
      regex: /阿鲁巴|🇦🇼|aruba/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇽奥兰群岛',
      regex: /奥兰群岛|🇦🇽|aland islands/i,
      ratioLimit: 2,
    },
    {
      name: '🇦🇿阿塞拜疆',
      regex: /阿塞拜疆|🇦🇿|azerbaijan/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇦波黑',
      regex: /波黑|🇧🇦|bosnia/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇧巴巴多斯',
      regex: /巴巴多斯|🇧🇧|barbados/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇩孟加拉',
      regex: /孟加拉|🇧🇩|bangladesh/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇪比利时',
      regex: /比利时|🇧🇪|belgium/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇫布基纳法索',
      regex: /布基纳法索|🇧🇫|faso/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇬保加利亚',
      regex: /保加利亚|🇧🇬|bulgaria/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇭巴林',
      regex: /巴林|🇧🇭|bahrain/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇮布隆迪',
      regex: /布隆迪|🇧🇮|burundi/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇯贝宁',
      regex: /贝宁|🇧🇯|benin/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇱圣巴泰勒米',
      regex: /圣巴泰勒米|🇧🇱|barthelemy/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇲百慕大',
      regex: /百慕大|🇧🇲|bermuda/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇳文莱',
      regex: /文莱|🇧🇳|brunei/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇴玻利维亚',
      regex: /玻利维亚|🇧🇴|bolivia/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇶博内尔',
      regex: /博内尔|🇧🇶|bonaire/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇷巴西',
      regex: /巴西|🇧🇷|brazil/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇸巴哈马',
      regex: /巴哈马|🇧🇸|bahamas/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇹不丹',
      regex: /不丹|🇧🇹|bhutan/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇻布韦岛',
      regex: /布韦岛|🇧🇻|bouvet/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇼博茨瓦纳',
      regex: /博茨瓦纳|🇧🇼|botswana/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇾白俄罗斯',
      regex: /白俄罗斯|🇧🇾|belarus/i,
      ratioLimit: 2,
    },
    {
      name: '🇧🇿伯利兹',
      regex: /伯利兹|🇧🇿|belize/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇦加拿大',
      regex: /加拿大|🇨🇦|canada/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇨科科斯群岛',
      regex: /科科斯群岛|🇨🇨|cocos/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇩刚果（金）',
      regex: /刚果（金）|🇨🇩|congo.+k+/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇫中非',
      regex: /中非|🇨🇫|central african/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇬刚果（布）',
      regex: /刚果（布）|🇨🇬|congo.+b+/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇭瑞士',
      regex: /瑞士|🇨🇭|switzerland/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇮科特迪瓦',
      regex: /科特迪瓦|🇨🇮|cote/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇰库克群岛',
      regex: /库克群岛|🇨🇰|cook/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇱智利',
      regex: /智利|🇨🇱|chile/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇲喀麦隆',
      regex: /喀麦隆|🇨🇲|cameroon/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇳中国',
      regex: /中国|🇨🇳|china/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇴哥伦比亚',
      regex: /哥伦比亚|🇨🇴|colombia/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇷哥斯达黎加',
      regex: /哥斯达黎加|🇨🇷|costa/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇺古巴',
      regex: /古巴|🇨🇺|cuba/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇻佛得角',
      regex: /佛得角|🇨🇻|verde/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇼库拉索',
      regex: /库拉索|🇨🇼|curacao/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇽圣诞岛',
      regex: /圣诞岛|🇨🇽|christmas/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇾塞浦路斯',
      regex: /塞浦路斯|🇨🇾|cyprus/i,
      ratioLimit: 2,
    },
    {
      name: '🇨🇿捷克',
      regex: /捷克|🇨🇿|czech/i,
      ratioLimit: 2,
    },
    {
      name: '🇩🇪德国',
      regex: /德国|🇩🇪|germany/i,
      ratioLimit: 2,
    },
    {
      name: '🇩🇯吉布提',
      regex: /吉布提|🇩🇯|djibouti/i,
      ratioLimit: 2,
    },
    {
      name: '🇩🇰丹麦',
      regex: /丹麦|🇩🇰|denmark/i,
      ratioLimit: 2,
    },
    {
      name: '🇩🇲多米尼克',
      regex: /多米尼克|🇩🇲|dominica/i,
      ratioLimit: 2,
    },
    {
      name: '🇩🇴多米尼加',
      regex: /多米尼加|🇩🇴|dominican/i,
      ratioLimit: 2,
    },
    {
      name: '🇩🇿阿尔及利亚',
      regex: /阿尔及利亚|🇩🇿|algeria/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇨厄瓜多尔',
      regex: /厄瓜多尔|🇪🇨|ecuador/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇪爱沙尼亚',
      regex: /爱沙尼亚|🇪🇪|estonia/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇬埃及',
      regex: /埃及|🇪🇬|egypt/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇭西撒哈拉',
      regex: /西撒哈拉|🇪🇭|sahara/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇷厄立特里亚',
      regex: /厄立特里亚|🇪🇷|eritrea/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇸西班牙',
      regex: /西班牙|🇪🇸|spain/i,
      ratioLimit: 2,
    },
    {
      name: '🇪🇹埃塞俄比亚',
      regex: /埃塞俄比亚|🇪🇹|ethiopia/i,
      ratioLimit: 2,
    },
    {
      name: '🇫🇮芬兰',
      regex: /芬兰|🇫🇮|finland/i,
      ratioLimit: 2,
    },
    {
      name: '🇫🇯斐济',
      regex: /斐济|🇫🇯|fiji/i,
      ratioLimit: 2,
    },
    {
      name: '🇫🇰福克兰群岛',
      regex: /福克兰群岛|🇫🇰|falkland/i,
      ratioLimit: 2,
    },
    {
      name: '🇫🇲密克罗尼西亚',
      regex: /密克罗尼西亚|🇫🇲|micronesia/i,
      ratioLimit: 2,
    },
    {
      name: '🇫🇴法罗群岛',
      regex: /法罗群岛|🇫🇴|faroe/i,
      ratioLimit: 2,
    },
    {
      name: '🇫🇷法国',
      regex: /法国|🇫🇷|france/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇦加蓬',
      regex: /加蓬|🇬🇦|gabon/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇧英国',
      regex: /英国|🇬🇧|great britain|united kingdom/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇩格林纳达',
      regex: /格林纳达|🇬🇩|grenada/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇪格鲁吉亚',
      regex: /格鲁吉亚|🇬🇪|georgia/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇫法属圭亚那',
      regex: /法属圭亚那|🇬🇫|f.+guiana/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇬根西岛',
      regex: /根西岛|🇬🇬|guernsey/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇭加纳',
      regex: /加纳|🇬🇭|ghana/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇮直布罗陀',
      regex: /直布罗陀|🇬🇮|gibraltar/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇱格陵兰',
      regex: /格陵兰|🇬🇱|greenland/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇲冈比亚',
      regex: /冈比亚|🇬🇲|gambia/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇳几内亚',
      regex: /几内亚|🇬🇳|guinea/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇵瓜德罗普',
      regex: /瓜德罗普|🇬🇵|guadeloupe/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇶赤道几内亚',
      regex: /赤道几内亚|🇬🇶|equatorial/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇷希腊',
      regex: /希腊|🇬🇷|greece/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇸南乔治亚岛和南桑威奇群岛',
      regex: /南乔治亚岛和南桑威奇群岛|🇬🇸|sandwich/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇹危地马拉',
      regex: /危地马拉|🇬🇹|guatemala/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇺关岛',
      regex: /关岛|🇬🇺|guam/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇼几内亚比绍',
      regex: /几内亚比绍|🇬🇼|bissau/i,
      ratioLimit: 2,
    },
    {
      name: '🇬🇾圭亚那',
      regex: /圭亚那|🇬🇾|guyana/i,
      ratioLimit: 2,
    },
    {
      name: '🇭🇰香港',
      regex: /香港|🇭🇰|hong( )?kong/i,
      ratioLimit: 2,
    },
    {
      name: '🇭🇲赫德岛和麦克唐纳群岛',
      regex: /赫德岛和麦克唐纳群岛|🇭🇲|heard/i,
      ratioLimit: 2,
    },
    {
      name: '🇭🇳洪都拉斯',
      regex: /洪都拉斯|🇭🇳|honduras/i,
      ratioLimit: 2,
    },
    {
      name: '🇭🇷克罗地亚',
      regex: /克罗地亚|🇭🇷|croatia/i,
      ratioLimit: 2,
    },
    {
      name: '🇭🇹海地',
      regex: /海地|🇭🇹|haiti/i,
      ratioLimit: 2,
    },
    {
      name: '🇭🇺匈牙利',
      regex: /匈牙利|🇭🇺|hungary/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇩印度尼西亚',
      regex: /印度尼西亚|🇮🇩|indonesia/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇪爱尔兰',
      regex: /爱尔兰|🇮🇪|ireland/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇱以色列',
      regex: /以色列|🇮🇱|israel/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇲马恩岛',
      regex: /马恩岛|🇮🇲|isle/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇳印度',
      regex: /印度|🇮🇳|india/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇴英属印度洋领地',
      regex: /英属印度洋领地|🇮🇴|b.+indian/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇶伊拉克',
      regex: /伊拉克|🇮🇶|iraq/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇷伊朗',
      regex: /伊朗|🇮🇷|iran/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇸冰岛',
      regex: /冰岛|🇮🇸|iceland/i,
      ratioLimit: 2,
    },
    {
      name: '🇮🇹意大利',
      regex: /意大利|🇮🇹|italy/i,
      ratioLimit: 2,
    },
    {
      name: '🇯🇪泽西岛',
      regex: /泽西岛|🇯🇪|jersey/i,
      ratioLimit: 2,
    },
    {
      name: '🇯🇲牙买加',
      regex: /牙买加|🇯🇲|jamaica/i,
      ratioLimit: 2,
    },
    {
      name: '🇯🇴约旦',
      regex: /约旦|🇯🇴|jordan/i,
      ratioLimit: 2,
    },
    {
      name: '🇯🇵日本',
      regex: /日本|🇯🇵|japan/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇪肯尼亚',
      regex: /肯尼亚|🇰🇪|kenya/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇬吉尔吉斯斯坦',
      regex: /吉尔吉斯斯坦|🇰🇬|kyrgyzstan/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇭柬埔寨',
      regex: /柬埔寨|🇰🇭|cambodia/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇮基里巴斯',
      regex: /基里巴斯|🇰🇮|kiribati/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇲科摩罗',
      regex: /科摩罗|🇰🇲|comoros/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇳圣基茨和尼维斯',
      regex: /圣基茨和尼维斯|🇰🇳|kitts/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇵朝鲜',
      regex: /朝鲜|🇰🇵|n.+korea/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇷韩国',
      regex: /韩国|🇰🇷|korea/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇼科威特',
      regex: /科威特|🇰🇼|kuwait/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇾开曼群岛',
      regex: /开曼群岛|🇰🇾|cayman/i,
      ratioLimit: 2,
    },
    {
      name: '🇰🇿哈萨克斯坦',
      regex: /哈萨克斯坦|🇰🇿|kazakhstan/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇦老挝',
      regex: /老挝|🇱🇦|laos/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇧黎巴嫩',
      regex: /黎巴嫩|🇱🇧|lebanon/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇨圣卢西亚',
      regex: /圣卢西亚|🇱🇨|lucia/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇮列支敦士登',
      regex: /列支敦士登|🇱🇮|liechtenstein/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇰斯里兰卡',
      regex: /斯里兰卡|🇱🇰|lanka/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇷利比里亚',
      regex: /利比里亚|🇱🇷|liberia/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇸莱索托',
      regex: /莱索托|🇱🇸|lesotho/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇹立陶宛',
      regex: /立陶宛|🇱🇹|lithuania/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇺卢森堡',
      regex: /卢森堡|🇱🇺|luxembourg/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇻拉脱维亚',
      regex: /拉脱维亚|🇱🇻|latvia/i,
      ratioLimit: 2,
    },
    {
      name: '🇱🇾利比亚',
      regex: /利比利亚|🇱🇾|libya/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇦摩洛哥',
      regex: /摩洛哥|🇲🇦|morocco/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇨摩纳哥',
      regex: /摩纳哥|🇲🇨|monaco/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇩摩尔多瓦',
      regex: /摩尔多瓦|🇲🇩|moldova/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇪黑山',
      regex: /黑山|🇲🇪|montenegro/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇫法属圣马丁',
      regex: /法属圣马丁|🇲🇫|saint martin/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇬马达加斯加',
      regex: /马达加斯加|🇲🇬|madagascar/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇭马绍尔群岛',
      regex: /马绍尔群岛|🇲🇭|marshall/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇰北马其顿',
      regex: /北马其顿|🇲🇰|n.+macedonia/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇱马里',
      regex: /马里|🇲🇱|mali/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇲缅甸',
      regex: /缅甸|🇲🇲|myanmar/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇳蒙古',
      regex: /蒙古|🇲🇳|mongolia/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇴澳门',
      regex: /澳门|🇲🇴|macao|macau/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇵北马里亚纳群岛',
      regex: /北马里亚纳群岛|🇲🇵|mariana/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇶马提尼克',
      regex: /马提尼克|🇲🇶|martinique/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇷毛里塔尼亚',
      regex: /毛里塔尼亚|🇲🇷|mauritania/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇸蒙特塞拉特',
      regex: /蒙特塞拉特|🇲🇸|montserrat/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇹马耳他',
      regex: /马耳他|🇲🇹|malta/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇺毛里求斯',
      regex: /毛里求斯|🇲🇺|mauritius/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇻马尔代夫',
      regex: /马尔代夫|🇲🇻|maldives/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇼马拉维',
      regex: /马拉维|🇲🇼|malawi/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇽墨西哥',
      regex: /墨西哥|🇲🇽|mexico/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇾马来西亚',
      regex: /马来西亚|🇲🇾|malaysia/i,
      ratioLimit: 2,
    },
    {
      name: '🇲🇿莫桑比克',
      regex: /莫桑比克|🇲🇿|mozambique/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇦纳米比亚',
      regex: /纳米比亚|🇳🇦|namibia/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇨新喀里多尼亚',
      regex: /新喀里多尼亚|🇳🇨|n.+caledonia/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇪尼日尔',
      regex: /尼日尔|🇳🇪|niger/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇫诺福克岛',
      regex: /诺福克岛|🇳🇫|norfolk/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇬尼日利亚',
      regex: /尼日利亚|🇳🇬|nigeria/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇮尼加拉瓜',
      regex: /尼加拉瓜|🇳🇮|nicaragua/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇱荷兰',
      regex: /荷兰|🇳🇱|netherlands/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇴挪威',
      regex: /挪威|🇳🇴|norway/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇵尼泊尔',
      regex: /尼泊尔|🇳🇵|nepal/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇷瑙鲁',
      regex: /瑙鲁|🇳🇷|nauru/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇺纽埃',
      regex: /纽埃|🇳🇺|niue/i,
      ratioLimit: 2,
    },
    {
      name: '🇳🇿新西兰',
      regex: /新西兰|🇳🇿|n.+zealand/i,
      ratioLimit: 2,
    },
    {
      name: '🇴🇲阿曼',
      regex: /阿曼|🇴🇲|oman/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇦巴拿马',
      regex: /巴拿马|🇵🇦|panama/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇪秘鲁',
      regex: /秘鲁|🇵🇪|peru/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇫法属波利尼西亚',
      regex: /法属波利尼西亚|🇵🇫|french polynesia/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇬巴布亚新几内亚',
      regex: /巴布亚新几内亚|🇵🇬|papua/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇭菲律宾',
      regex: /菲律宾|🇵🇭|philippines/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇰巴基斯坦',
      regex: /巴基斯坦|🇵🇰|pakistan/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇱波兰',
      regex: /波兰|🇵🇱|poland/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇲圣皮埃尔和密克隆',
      regex: /圣皮埃尔和密克隆|🇵🇲|pierre/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇳皮特凯恩',
      regex: /皮特凯恩|🇵🇳|pitcairn/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇷波多黎各',
      regex: /波多黎各|🇵🇷|puerto rico/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇸巴勒斯坦',
      regex: /巴勒斯坦|🇵🇸|palestine/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇹葡萄牙',
      regex: /葡萄牙|🇵🇹|portugal/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇼帕劳',
      regex: /帕劳|🇵🇼|palau/i,
      ratioLimit: 2,
    },
    {
      name: '🇵🇾巴拉圭',
      regex: /巴拉圭|🇵🇾|paraguay/i,
      ratioLimit: 2,
    },
    {
      name: '🇶🇦卡塔尔',
      regex: /卡塔尔|🇶🇦|qatar/i,
      ratioLimit: 2,
    },
    {
      name: '🇷🇪留尼汪',
      regex: /留尼汪|🇷🇪|reunion/i,
      ratioLimit: 2,
    },
    {
      name: '🇷🇴罗马尼亚',
      regex: /罗马尼亚|🇷🇴|romania/i,
      ratioLimit: 2,
    },
    {
      name: '🇷🇸塞尔维亚',
      regex: /塞尔维亚|🇷🇸|serbia/i,
      ratioLimit: 2,
    },
    {
      name: '🇷🇺俄罗斯',
      regex: /俄罗斯|🇷🇺|russia/i,
      ratioLimit: 2,
    },
    {
      name: '🇷🇼卢旺达',
      regex: /卢旺达|🇷🇼|rwanda/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇦沙特',
      regex: /沙特|🇸🇦|saudi arabia/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇧所罗门群岛',
      regex: /所罗门群岛|🇸🇧|solomon/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇨塞舌尔',
      regex: /塞舌尔|🇸🇨|seychelles/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇩苏丹',
      regex: /苏丹|🇸🇩|sudan/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇪瑞典',
      regex: /瑞典|🇸🇪|sweden/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇬新加坡',
      regex: /新加坡|🇸🇬|singapore/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇭圣赫勒拿',
      regex: /圣赫勒拿|🇸🇭|helena/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇮斯洛文尼亚',
      regex: /斯洛文尼亚|🇸🇮|slovenia/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇯斯瓦尔巴和扬马延',
      regex: /斯瓦尔巴和扬马延|🇸🇯|svalbard/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇰斯洛伐克',
      regex: /斯洛伐克|🇸🇰|slovakia/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇱塞拉利昂',
      regex: /塞拉利昂|🇸🇱|sierra leone/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇲圣马力诺',
      regex: /圣马力诺|🇸🇲|san marino/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇳塞内加尔',
      regex: /塞内加尔|🇸🇳|senegal/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇴索马里',
      regex: /索马里|🇸🇴|somalia/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇷苏里南',
      regex: /苏里南|🇸🇷|suriname/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇸南苏丹',
      regex: /南苏丹|🇸🇸|south sudan/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇹圣多美和普林西比',
      regex: /圣多美和普林西比|🇸🇹|sao tome/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇻萨尔瓦多',
      regex: /萨尔瓦多|🇸🇻|el salvador/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇽荷属圣马丁',
      regex: /荷属圣马丁|🇸🇽|sint maarten/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇾叙利亚',
      regex: /叙利亚|🇸🇾|syria/i,
      ratioLimit: 2,
    },
    {
      name: '🇸🇿斯威士兰',
      regex: /斯威士兰|🇸🇿|eswatini/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇨特克斯和凯科斯群岛',
      regex: /特克斯和凯科斯群岛|🇹🇨|turks/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇩乍得',
      regex: /乍得|🇹🇩|chad/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇫法属南部领地',
      regex: /法属南部领地|🇹🇫|french southern territories/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇬多哥',
      regex: /多哥|🇹🇬|togo/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇭泰国',
      regex: /泰国|🇹🇭|thailand/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇯塔吉克斯坦',
      regex: /塔吉克斯坦|🇹🇯|tajikistan/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇰托克劳',
      regex: /托克劳|🇹🇰|tokelau/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇱东帝汶',
      regex: /东帝汶|🇹🇱|timor-leste/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇲土库曼斯坦',
      regex: /土库曼斯坦|🇹🇲|turkmenistan/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇳突尼斯',
      regex: /突尼斯|🇹🇳|tunisia/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇴汤加',
      regex: /汤加|🇹🇴|tonga/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇷土耳其',
      regex: /土耳其|🇹🇷|turkey/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇹特立尼达和多巴哥',
      regex: /特立尼达和多巴哥|🇹🇹|tobago/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇻图瓦卢',
      regex: /图瓦卢|🇹🇻|tuvalu/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇼台湾',
      regex: /台湾|🇹🇼|taiwan/i,
      ratioLimit: 2,
    },
    {
      name: '🇹🇿坦桑尼亚',
      regex: /坦桑尼亚|🇹🇿|tanzania/i,
      ratioLimit: 2,
    },
    {
      name: '🇺🇦乌克兰',
      regex: /乌克兰|🇺🇦|ukraine/i,
      ratioLimit: 2,
    },
    {
      name: '🇺🇬乌干达',
      regex: /乌干达|🇺🇬|uganda/i,
      ratioLimit: 2,
    },
    {
      name: '🇺🇲美国本土外小岛屿',
      regex: /美国本土外小岛屿|🇺🇲|us.+islands/i,
      ratioLimit: 2,
    },
    {
      name: '🇺🇸美国',
      regex: /美国|🇺🇸|united states|america/i,
      ratioLimit: 2,
    },
    {
      name: '🇺🇾乌拉圭',
      regex: /乌拉圭|🇺🇾|uruguay/i,
      ratioLimit: 2,
    },
    {
      name: '🇺🇿乌兹别克斯坦',
      regex: /乌兹别克斯坦|🇺🇿|uzbekistan/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇦梵蒂冈',
      regex: /梵蒂冈|🇻🇦|vatican/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇨圣文森特和格林纳丁斯',
      regex: /圣文森特和格林纳丁斯|🇻🇨|vincent/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇪委内瑞拉',
      regex: /委内瑞拉|🇻🇪|venezuela/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇬英属维尔京群岛',
      regex: /英属维尔京群岛|🇻🇬|b.+virgin/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇮美属维尔京群岛',
      regex: /美属维尔京群岛|🇻🇮|u.+virgin/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇳越南',
      regex: /越南|🇻🇳|vietnam/i,
      ratioLimit: 2,
    },
    {
      name: '🇻🇺瓦努阿图',
      regex: /瓦努阿图|🇻🇺|vanuatu/i,
      ratioLimit: 2,
    },
    {
      name: '🇼🇫瓦利斯和富图纳',
      regex: /瓦利斯和富图纳|🇼🇫|wallis/i,
      ratioLimit: 2,
    },
    {
      name: '🇼🇸萨摩亚',
      regex: /萨摩亚|🇼🇸|samoa/i,
      ratioLimit: 2,
    },
    {
      name: '🇾🇪也门',
      regex: /也门|🇾🇪|yemen/i,
      ratioLimit: 2,
    },
    {
      name: '🇾🇹马约特',
      regex: /马约特|🇾🇹|mayotte/i,
      ratioLimit: 2,
    },
    {
      name: '🇿🇦南非',
      regex: /南非|🇿🇦|south africa/i,
      ratioLimit: 2,
    },
    {
      name: '🇿🇲赞比亚',
      regex: /赞比亚|🇿🇲|zambia/i,
      ratioLimit: 2,
    },
    {
      name: '🇿🇼津巴布韦',
      regex: /津巴布韦|🇿🇼|zimbabwe/i,
      ratioLimit: 2,
    }
  ]
}

/**
 * 其实两组DNS就够了，一组国内，一组国外
 * defaultDNS是用来解析DNS的，必须为IP
 * DNS最好不要超过两个，从业界某知名APP的文档里学的
 */
const defaultDNS = ['tls://8.8.8.8']

const chinaDNS = ['119.29.29.29', '223.5.5.5']

const foreignDNS = ['8.8.8.8', '1.1.1.1']

/**
 * DNS相关配置
 */
const dnsConfig = {
  enable: true,
  listen: ':1053',
  ipv6: true,
  'prefer-h3': true,
  'use-hosts': true,
  'use-system-hosts': true,
  'respect-rules': true,
  'enhanced-mode': 'fake-ip',
  'fake-ip-range': '198.18.0.1/16',
  'fake-ip-filter': ['*', '+.lan', '+.local', '+.market.xiaomi.com'],
  // 'default-nameserver': [...defaultDNS],
  nameserver: [...foreignDNS],
  'proxy-server-nameserver': [...foreignDNS],
  /**
   * 这里对域名解析进行分流
   * 由于默认dns是国外的了，只需要把国内ip和域名分流到国内dns
   */
  'nameserver-policy': {
    'geosite:private': 'system',
    'geosite:cn,steam@cn,category-games@cn,microsoft@cn,apple@cn': chinaDNS
  }
}

// 规则集通用配置
const ruleProviderCommon = {
  type: 'http',
  format: 'yaml',
  interval: 86400
}

// 代理组通用配置
const groupBaseOption = {
  interval: 300,
  timeout: 3000,
  url: 'http://cp.cloudflare.com/generate_204',
  lazy: true,
  'max-failed-times': 3,
  hidden: false
}

const ruleProviders = new Map()
ruleProviders.set('applications', {
  ...ruleProviderCommon,
  behavior: 'classical',
  format: 'text',
  url: 'https://fastly.jsdelivr.net/gh/DustinWin/ruleset_geodata@clash-ruleset/applications.list',
  path: './ruleset/DustinWin/applications.list'
})

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0
  const proxyProviderCount =
    typeof config?.['proxy-providers'] === 'object'
      ? Object.keys(config['proxy-providers']).length
      : 0
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error('配置文件中未找到任何代理')
  }

  let regionProxyGroups = []
  let otherProxyGroups = config.proxies.map((b) => {
    return b.name
  })

  config['allow-lan'] = true

  config['bind-address'] = '*'

  config['mode'] = 'rule'

  // 覆盖原配置中DNS配置
  config['dns'] = dnsConfig

  config['profile'] = {
    'store-selected': true,
    'store-fake-ip': true
  }

  config['unified-delay'] = true

  config['tcp-concurrent'] = true

  /**
   * 这个值设置大点能省电，笔记本和手机需要关注一下
   */
  config['keep-alive-interval'] = 3600

  config['find-process-mode'] = 'strict'

  config['geodata-mode'] = true

  /**
   * 适合小内存环境，如果在旁路由里运行可以改成standard
   */
  config['geodata-loader'] = 'memconservative'

  config['geo-auto-update'] = true

  config['geo-update-interval'] = 24

  /**
   * 不开域名嗅探的话，日志里只会记录请求的ip，对查找问题不方便
   * override-destination默认值是true，但是个人建议全局设为false，否则某些应用会出现莫名其妙的问题
   * Mijia Cloud跳过是网上抄的
   */
  config['sniffer'] = {
    enable: true,
    'force-dns-mapping': true,
    'parse-pure-ip': false,
    'override-destination': false,
    sniff: {
      TLS: {
        ports: [443, 8443]
      },
      HTTP: {
        ports: [80, '8080-8880']
      },
      QUIC: {
        ports: [443, 8443]
      }
    },
    'force-domain': [],
    'skip-src-address': [
      '127.0.0.0/8',
      '192.168.0.0/16',
      '10.0.0.0/8',
      '172.16.0.0/12'
    ],
    'force-domain': [
      '+.google.com',
      '+.googleapis.com',
      '+.googleusercontent.com',
      '+.youtube.com',
      '+.facebook.com',
      '+.messenger.com',
      '+.fbcdn.net',
      'fbcdn-a.akamaihd.net'
    ],
    'skip-domain': [
      'Mijia Cloud',
      '+.oray.com'
    ]
  }

  /**
   * write-to-system如果设为true的话，有可能出现电脑时间不对的问题
   */
  config['ntp'] = {
    enable: true,
    'write-to-system': false,
    server: 'cn.ntp.org.cn'
  }

  config['geox-url'] = {
    geoip:
      'https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geoip.dat',
    geosite:
      'https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geosite.dat',
    mmdb: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/Country.mmdb',
    asn: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/GeoLite2-ASN.mmdb'
  }

  /**
   * 总开关关闭时不处理策略组
   */
  if (!enable) {
    return config
  }

  regionOptions.regions.forEach((region) => {
    /**
     * 提取倍率符合要求的代理节点
     * 判断倍率有问题的话，大概率是这个正则的问题，可以自行修改
     * 自己改正则的话记得必须把倍率的number值提取出来
     */
    let proxies = config.proxies
      .filter((a) => {
        const multiplier =
          /(?<=[xX✕✖⨉倍率])([1-9]+(\.\d+)*|0{1}\.\d+)(?=[xX✕✖⨉倍率])*/i.exec(
            a.name
          )?.[1]
        return (
          a.name.match(region.regex) &&
          parseFloat(multiplier || '0') <= region.ratioLimit
        )
      })
      .map((b) => {
        return b.name
      })

    /**
     * 必须再判断一下有没有符合要求的代理节点
     * 没有的话，这个策略组就不应该存在
     * 我喜欢自动选择延迟最低的节点，喜欢轮询的可以自己修改
     */
    if (proxies.length > 0) {
      regionProxyGroups.push({
        ...groupBaseOption,
        name: region.name,
        type: 'url-test',
        tolerance: 50,
        icon: region.icon,
        proxies: proxies
      })
    }

    otherProxyGroups = otherProxyGroups.filter((x) => !proxies.includes(x))
  })

  const proxyGroupsRegionNames = regionProxyGroups.map((value) => {
    return value.name
  })

  if (otherProxyGroups.length > 0) {
    proxyGroupsRegionNames.push('其他节点')
  }

  config['proxy-groups'] = [
    {
      ...groupBaseOption,
      name: '默认节点',
      type: 'select',
      proxies: [...proxyGroupsRegionNames, '直连', '屏蔽'],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Proxy.png'
    },
  ]

  config.proxies = config?.proxies || []
  config.proxies.push({
    name: '直连',
    type: 'direct',
    udp: true
  })
  config.proxies.push({
    name: '屏蔽',
    type: 'reject'
  })

  if (ruleOptions.openai) {
    rules.push(
      'DOMAIN-SUFFIX,grazie.ai,国外AI',
      'DOMAIN-SUFFIX,grazie.aws.intellij.net,国外AI',
      'RULE-SET,foreign-ai,国外AI'
    )
    ruleProviders.set('foreign-ai', {
      ...ruleProviderCommon,
      behavior: 'classical',
      format: 'text',
      url: 'https://github.com/dahaha-365/YaNet/raw/refs/heads/dist/rulesets/mihomo/ai.list',
      path: './ruleset/YaNet/ai.list'
    })
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '国外AI',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://chat.openai.com/cdn-cgi/trace',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/ChatGPT.png'
    })
  }

  if (ruleOptions.github) {
    rules.push('GEOSITE,github,Github')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Github',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://github.com/robots.txt',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/GitHub.png'
    })
  }

  if (ruleOptions.mihoyodl) {
    rules.push(
      'DOMAIN-REGEX,.*downloader-api\.mihoyo\.com,miHoYo下载',
      'DOMAIN-REGEX,.*downloader-api\.hoyoverse\.com,miHoYo下载',
      'DOMAIN-REGEX,.*hyp-api\.mihoyo\.com,miHoYo下载',
      'DOMAIN-REGEX,.*hyp-api\.hoyoverse\.com,miHoYo下载',
      'DOMAIN-REGEX,autopatch.*\.bh3\.com,miHoYo下载',
      'DOMAIN-REGEX,autopatch.*\.honkaiimpact3\.com,miHoYo下载',
      'DOMAIN-REGEX,autopatch.*\.yuanshen\.com,miHoYo下载',
      'DOMAIN-SUFFIX,autopatchcn.bhsr.com,miHoYo下载',
      'DOMAIN-SUFFIX,autopatchos.starrails.com,miHoYo下载',
      'DOMAIN-SUFFIX,autopatchcn.juequling.com,miHoYo下载',
      'DOMAIN-SUFFIX,autopatchos.zenlesszonezero.com,miHoYo下载'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'miHoYo下载',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://www.mihoyo.com',
      icon: 'https://bbs-static.miyoushe.com/upload/op_manual_upload/fe/game_list/game_icons/1715415394283dby-logo-v2.png'
    })
  }

  if (ruleOptions.hoyolab) {
    rules.push(
      'DOMAIN-SUFFIX,hoyolab.com,HoYoverse社区/登录',
      'DOMAIN-SUFFIX,hoyo.link,HoYoverse社区/登录',
      'DOMAIN-SUFFIX,account.hoyoverse.com,HoYoverse社区/登录',
      'DOMAIN-REGEX,dispatchos.*\.yuanshen\.com,HoYoverse社区/登录',
      'DOMAIN-REGEX,os.*dispatch\.yuanshen\.com,HoYoverse社区/登录',
      'DOMAIN-REGEX,globaldp.*\.starrails\.com,HoYoverse社区/登录',
      'DOMAIN-REGEX,prod.*\.starrails\.com,HoYoverse社区/登录',
      'DOMAIN-REGEX,globaldp.*\.zenlesszonezero\.com,HoYoverse社区/登录',
      'DOMAIN-REGEX,prod.*\.zenlesszonezero\.com,HoYoverse社区/登录'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'HoYoverse社区/登录',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.hoyolab.com',
      icon: 'https://fastcdn.hoyoverse.com/content-v2/plat/101581/77f36e14ec28939d7f77c4c57618c5f7_519912983958508131.jpeg'
    })
  }

  if (ruleOptions.hoyoverse) {
    rules.push('GEOSITE,hoyoverse,HoYoverse')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'HoYoverse',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.hoyoverse.com',
      icon: 'https://www.hoyoverse.com/favicon-256.ico'
    })
  }

  if (ruleOptions.mihoyo) {
    rules.push(
      'GEOSITE,mihoyo,miHoYo',
      'GEOSITE,mihoyo-cn,miHoYo'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'miHoYo',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://www.mihoyo.com',
      icon: 'https://webstatic.mihoyo.com/upload/event/2021/11/11/8494b1367813da0ce15b3277b1c37cb2_4388417983115824846.png'
    })
  }

  if (ruleOptions.steamdl) {
    rules.push(
      'GEOSITE,steam@cn,Steam下载/登录',
      'DOMAIN-SUFFIX,steamchina.com,Steam下载/登录',
      'DOMAIN-SUFFIX,cm.steampowered.com,Steam下载/登录',
      'DOMAIN-SUFFIX,steampowered.com.8686c.com,Steam下载/登录',
      'DOMAIN-SUFFIX,steamserver.net,Steam下载/登录',
      'DOMAIN-SUFFIX,steamstatic.com.8686c.com,Steam下载/登录',
      'DOMAIN-SUFFIX,fastly.steamstatic.com,Steam下载/登录',
      'DOMAIN,steamcdn-a.akamaihd.net,Steam下载/登录',
      'DOMAIN-SUFFIX,steampipe.akamaized.net,Steam下载/登录',
      'DOMAIN-SUFFIX,steampipe-kr.akamaized.net,Steam下载/登录',
      'DOMAIN-SUFFIX,steampipe-partner.akamaized.net,Steam下载/登录',
      'DOMAIN-SUFFIX,steampipe.steamcontent.tnkjmec.com,Steam下载/登录',
      'DOMAIN-SUFFIX,steamcontent.com,Steam下载/登录',
      'DOMAIN-SUFFIX,steamusercontent.com,Steam下载/登录',
      'DOMAIN-SUFFIX,dl.steam.clngaa.com,Steam下载/登录',
      'DOMAIN-SUFFIX,dl.steam.ksyna.com,Steam下载/登录',
      'DOMAIN-SUFFIX,st.dl.bscstorage.net,Steam下载/登录',
      'DOMAIN-SUFFIX,st.dl.eccdnx.com,Steam下载/登录',
      'DOMAIN-SUFFIX,st.dl.pinyuncloud.com,Steam下载/登录',
      'DOMAIN,xz.pphimalayanrt,Steam下载/登录',
      'DOMAIN-SUFFIX,wmsjsteam.com,Steam下载/登录',
      'DOMAIN-SUFFIX,csgo.wmsj.cn,Steam下载/登录',
      'DOMAIN-SUFFIX,dota2.wmsj.cn,Steam下载/登录',
      'DOMAIN-SUFFIX,qtlglb.com,Steam下载/登录',
      'DOMAIN-SUFFIX,queniuqe.com,Steam下载/登录',
      'IP-ASN,32590,Steam下载/登录'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Steam下载/登录',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://steampipe.akamaized.net',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Steam.png'
    })
  }

  if (ruleOptions.steam) {
    rules.push(
      'GEOSITE,steam,Steam商店/社区',
      'GEOSITE,steamunlocked,Steam商店/社区',
      'DOMAIN,steambroadcast.akamaized.net,Steam商店/社区',
      'DOMAIN,steamcommunity-a.akamaihd.net,Steam商店/社区',
      'DOMAIN,steamstore-a.akamaihd.net,Steam商店/社区',
      'DOMAIN,steamusercontent-a.akamaihd.net,Steam商店/社区',
      'DOMAIN,steamuserimages-a.akamaihd.net,Steam商店/社区',
      'DOMAIN-SUFFIX,fanatical.com,Steam商店/社区',
      'DOMAIN-SUFFIX,humblebundle.com,Steam商店/社区',
      'DOMAIN-SUFFIX,playartifact.com,Steam商店/社区',
      'DOMAIN-SUFFIX,steam-chat.com,Steam商店/社区',
      'DOMAIN-SUFFIX,steamcommunity.com,Steam商店/社区',
      'DOMAIN-SUFFIX,steamgames.com,Steam商店/社区',
      'DOMAIN-SUFFIX,steampowered.com,Steam商店/社区',
      'DOMAIN-SUFFIX,steamstat.us,Steam商店/社区',
      'DOMAIN-SUFFIX,steamstatic.com,Steam商店/社区',
      'DOMAIN-SUFFIX,underlords.com,Steam商店/社区',
      'DOMAIN-SUFFIX,valvesoftware.com,Steam商店/社区'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Steam商店/社区',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://store.steampowered.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Steam.png'
    })
  }

  if (ruleOptions.epicgamesdl) {
    rules.push('DOMAIN-REGEX,epicgames-download\d+\.akamaized\.net,EpicGames下载')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'EpicGames下载',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://store.epicgames.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Epic_Games.png'
    })
  }

  if (ruleOptions.epicgames) {
    rules.push(
      'GEOSITE,epicgames,EpicGames商店',
      'DOMAIN-SUFFIX,epicgames.com,EpicGames商店',
      'DOMAIN-SUFFIX,epicgames.dev,EpicGames商店',
      'DOMAIN-SUFFIX,ak.epicgames.com,EpicGames商店',
      'DOMAIN-SUFFIX,on.epicgames.com,EpicGames商店'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'EpicGames商店',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://store.epicgames.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Epic_Games.png'
    })
  }

  if (ruleOptions.spotifydl) {
    rules.push(
      'DOMAIN-SUFFIX,pscdn.co,Spotify播放',
      'DOMAIN-SUFFIX,scdn.co,Spotify播放',
      'DOMAIN-KEYWORD,spotifycdn,Spotify播放',
      'DOMAIN-SUFFIX,spotifycdn.net,Spotify播放',
      'DOMAIN-SUFFIX,spotifycdn.com,Spotify播放',
      'DOMAIN-SUFFIX,audio-ak.spotifycdn.com,Spotify播放',
      'DOMAIN-SUFFIX,heads-ak-spotify-com.akamaized.net,Spotify播放',
      'DOMAIN-SUFFIX,audio-ak-spotify-com.akamaized.net,Spotify播放',
      'DOMAIN-SUFFIX,audio4-ak-spotify-com.akamaized.net,Spotify播放',
      'DOMAIN-SUFFIX,audio-akp-bbr-spotify-com.akamaized.net,Spotify播放'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Spotify播放',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'http://spclient.wg.spotify.com/signup/public/v1/account',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Spotify.png'
    })
  }

  if (ruleOptions.spotify) {
    rules.push('GEOSITE,spotify,Spotify登录')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Spotify登录',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://spclient.wg.spotify.com/signup/public/v1/account',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Spotify.png'
    })
  }

  if (ruleOptions.youtube) {
    rules.push('GEOSITE,youtube,YouTube')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'YouTube',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.youtube.com/s/desktop/494dd881/img/favicon.ico',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/YouTube.png'
    })
  }

  if (ruleOptions.twitch) {
    rules.push('GEOSITE,twitch,Twitch')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Twitch',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.twitch.tv',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Twitch.png'
    })
  }

  if (ruleOptions.tiktok) {
    rules.push('GEOSITE,tiktok,Tiktok')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Tiktok',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.tiktok.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/TikTok.png'
    })
  }

  if (ruleOptions.douyin) {
    rules.push(
      'DOMAIN-SUFFIX,www.douyin.com,Tiktok',
      'DOMAIN-REGEX,api[0-9]+.*amemv\.com,Tiktok',
      'RULE-SET,tiktok-cn,抖音'
    )
    ruleProviders.set('tiktok-cn', {
      ...ruleProviderCommon,
      behavior: 'classical',
      format: 'text',
      url: 'https://cdn.jsdelivr.net/gh/karllee830/clash-block-tiktok-kwai-rules@master/tiktok.list',
      path: './ruleset/dy/tiktok.list'
    })
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '抖音',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://www.douyin.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/TikTok.png'
    })
  }

  if (ruleOptions.biliintl) {
    rules.push(
      'GEOSITE,biliintl,哔哩哔哩番剧解锁',
      'DOMAIN-SUFFIX,api.bilibili.com,哔哩哔哩番剧解锁'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '哔哩哔哩番剧解锁',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.bilibili.tv',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/bilibili_3.png'
    })
  }

  if (ruleOptions.bilibili) {
    rules.push('GEOSITE,bilibili,哔哩哔哩')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '哔哩哔哩',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'https://www.bilibili.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/bilibili.png'
    })
  }

  if (ruleOptions.niconico) {
    rules.push('GEOSITE,niconico,NicoNico')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'NicoNico',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.nicovideo.jp',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/niconico_1.png'
    })
  }

  if (ruleOptions.bahamut) {
    rules.push('GEOSITE,bahamut,巴哈姆特')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '巴哈姆特',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://ani.gamer.com.tw/ajax/getdeviceid.php',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Bahamut.png'
    })
  }

  if (ruleOptions.netflix) {
    rules.push(
      'GEOIP,netflix,NETFLIX',
      'GEOSITE,netflix,NETFLIX'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'NETFLIX',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://api.fast.com/netflix/speedtest/v2?https=true',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Netflix.png'
    })
  }

  if (ruleOptions.primevideo) {
    rules.push('GEOSITE,primevideo,Prime Video')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Prime Video',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Prime_Video.png'
    })
  }

  if (ruleOptions.hulu) {
    rules.push('GEOSITE,hulu,Hulu')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Hulu',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://auth.hulu.com/v4/web/password/authenticate',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Hulu.png'
    })
  }

  if (ruleOptions.disney) {
    rules.push('GEOSITE,disney,Disney+')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Disney+',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://disney.api.edge.bamgrid.com/devices',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Disney+.png'
    })
  }

  if (ruleOptions.hbo) {
    rules.push('GEOSITE,hbo,HBO')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'HBO',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.hbo.com/favicon.ico',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/HBO.png'
    })
  }

  if (ruleOptions.tvb) {
    rules.push('GEOSITE,tvb,TVB')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'TVB',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.tvb.com/logo_b.svg',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/TVB.png'
    })
  }

  if (ruleOptions.pixiv) {
    rules.push('GEOSITE,pixiv,Pixiv')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Pixiv',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.pixiv.net',
      icon: 'https://s.pximg.net/common/images/apple-touch-icon.png?20250206'
    })
  }

  if (ruleOptions.twitter) {
    rules.push(
      'DOMAIN-SUFFIX,X.com,Twitter',
      'DOMAIN-SUFFIX,grok.com,Twitter',
      'DOMAIN-SUFFIX,featureassets.org,Twitter',
      'GEOIP,twitter,Twitter',
      'GEOSITE,twitter,Twitter',
      'GEOSITE,x,Twitter',
      'GEOSITE,xai,Twitter'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Twitter',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://x.com/favicon.ico',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/X.png'
    })
  }

  if (ruleOptions.facebook) {
    rules.push(
      'GEOIP,facebook,Facebook',
      'GEOSITE,facebook,Facebook',
      'GEOSITE,meta,Facebook',
      'GEOSITE,instagram,Facebook'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Facebook',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://www.facebook.com/common/referer_frame.php',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Facebook.png'
    })
  }

  if (ruleOptions.discord) {
    rules.push('GEOSITE,discord,Discord')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Discord',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://discord.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Discord.png'
    })
  }

  if (ruleOptions.telegram) {
    rules.push(
      'GEOIP,telegram,Telegram',
      'GEOSITE,telegram,Telegram'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Telegram',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://www.telegram.org/img/website_icon.svg',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Telegram.png'
    })
  }

  if (ruleOptions.whatsapp) {
    rules.push('GEOSITE,whatsapp,WhatsApp')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'WhatsApp',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://web.whatsapp.com/data/manifest.json',
      icon: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png'
    })
  }

  if (ruleOptions.line) {
    rules.push('GEOSITE,line,Line')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Line',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://line.me/page-data/app-data.json',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Line.png'
    })
  }

  if (ruleOptions.games) {
    rules.push('GEOSITE,category-games@cn,国服游戏')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '国服游戏',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames, '屏蔽'],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/China_Map.png'
    })
  }

  if (ruleOptions.games) {
    rules.push('GEOSITE,category-games,外服游戏')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '外服游戏',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames, '屏蔽'],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Game.png'
    })
  }

  if (ruleOptions.tracker) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '跟踪分析',
      type: 'select',
      proxies: ['屏蔽', '直连', '默认节点'],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Reject.png'
    })
  }

  if (ruleOptions.ads) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '广告过滤',
      type: 'select',
      proxies: ['屏蔽', '直连', '默认节点'],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Advertising.png'
    })
  }

  if (ruleOptions.cloudflare) {
    rules.push(
      'GEOSITE,cloudflare@cn,国内网站',
      'GEOSITE,cloudflare-cn,国内网站',
      'GEOIP,cloudflare,Cloudflare',
      'GEOSITE,cloudflare,Cloudflare'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Cloudflare',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://cp.cloudflare.com/generate_204',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Cloudflare.png'
    })
  }

  if (ruleOptions.amazon) {
    rules.push('GEOSITE,amazon,亚马逊')
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '亚马逊',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://aws-latency-test.com',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Amazon.png'
    })
  }

  if (ruleOptions.apple) {
    rules.push(
      'GEOSITE,apple@cn,国内网站',
      'GEOSITE,apple-cn,国内网站',
      'GEOSITE,apple,苹果服务'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '苹果服务',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://www.apple.com/library/test/success.html',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Apple_2.png'
    })
  }

  if (ruleOptions.googlecn) {
    rules.push(
      'DOMAIN-REGEX,.*(2x3|ni5|j5o).*\.xn--ngstr-(lra8j|cn-8za9o)\.com,谷歌下载/登录',
      'DOMAIN-SUFFIX,google.cn,谷歌下载/登录',
      'DOMAIN-SUFFIX,googleapis.cn,谷歌下载/登录',
      'GEOSITE,google@cn,谷歌下载/登录',
      'GEOSITE,google-cn,谷歌下载/登录'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '谷歌下载/登录',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://www.gstatic.com/generate_204',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Google_Search.png'
    })
  }

  if (ruleOptions.google) {
    rules.push(
      'GEOIP,google,谷歌服务',
      'GEOSITE,google,谷歌服务'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '谷歌服务',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://www.google.com/generate_204',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Google_Search.png'
    })
  }

  if (ruleOptions.microsoft) {
    rules.push(
      'GEOSITE,microsoft@cn,国内网站',
      'GEOSITE,microsoft,微软服务'
    )
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '微软服务',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'http://www.msftconnecttest.com/connecttest.txt',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Microsoft.png'
    })
  }

  if (ruleOptions.japan) {
    rules.push(
      'RULE-SET,category-bank-jp,日本网站',
      'GEOIP,jp,日本网站,no-resolve'
    )
    ruleProviders.set('category-bank-jp', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-bank-jp.mrs',
      path: './ruleset/MetaCubeX/category-bank-jp.mrs'
    })
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '日本网站',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      url: 'https://r.r10s.jp/com/img/home/logo/touch.png',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/JP.png'
    })
  }

  rules.push(
    'GEOSITE,private,DIRECT',
    'GEOIP,private,DIRECT,no-resolve',
    'GEOSITE,gfw,GFW列表',
    'GEOSITE,cn,国内网站',
    'GEOIP,cn,国内网站,no-resolve',
    'MATCH,漏网之鱼'
  )
  config['proxy-groups'].push(
    {
      ...groupBaseOption,
      name: '下载软件',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Download.png'
    },
    {
      ...groupBaseOption,
      name: 'GFW列表',
      type: 'select',
      proxies: ['默认节点', '直连', ...proxyGroupsRegionNames],
      icon: 'https://cdn-icons-png.flaticon.com/128/14251/14251400.png'
    },
    {
      ...groupBaseOption,
      name: '国内网站',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'http://wifi.vivo.com.cn/generate_204',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/StreamingCN.png'
    },
    {
      ...groupBaseOption,
      name: '漏网之鱼',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://cdn-icons-png.flaticon.com/128/10507/10507711.png'
    }
  )

  config['proxy-groups'] = config['proxy-groups'].concat(regionProxyGroups)

  // 覆盖原配置中的规则
  config['rules'] = rules
  config['rule-providers'] = Object.fromEntries(ruleProviders)

  if (otherProxyGroups.length > 0) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '其他节点',
      type: 'select',
      proxies: otherProxyGroups,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/World_Map.png'
    })
  }

  // 返回修改后的配置
  return config
}
