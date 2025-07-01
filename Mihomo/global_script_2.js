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
      name: '🇦🇶南极洲',
      regex: /南极|🇦🇶|aq|antarctica/i,
      ratioLimit: 2,
      icon: 'https://cdn-icons-png.flaticon.com/128/9098/9098207.png'
    },
    {
      name: '🇦🇺澳大利亚',
      regex: /澳大利亚|🇦🇺|au|australia/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Australia.png'
    },
    {
      name: '🇧🇷巴西',
      regex: /巴西|🇧🇷|br|brazil/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Brazil.png'
    },
    {
      name: '🇨🇦加拿大',
      regex: /加拿大|🇨🇦|ca|canada/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Canada.png'
    },
    {
      name: '🇨🇱智利',
      regex: /智利|🇨🇱|cl|chile/i,
      ratioLimit: 2,
      icon: 'https://cdn-icons-png.flaticon.com/128/330/330554.png'
    },
    {
      name: '🇨🇳大陆',
      regex: /中国|大陆|内地|🇨🇳|cn|china/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/China.png'
    },
    {
      name: '🇩🇪德国',
      regex: /德国|🇩🇪|de|germany/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Germany.png'
    },
    {
      name: '🇪🇸西班牙',
      regex: /西班牙|🇪🇸|es|spain/i,
      ratioLimit: 2,
      icon: 'https://cdn-icons-png.flaticon.com/128/330/330557.png'
    },
    {
      name: '🇫🇷法国',
      regex: /法国|🇫🇷|fr|france/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/France.png'
    },
    {
      name: '🇭🇰香港',
      regex: /港|🇭🇰|hk|hongkong|hong kong/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Hong_Kong.png'
    },
    {
      name: '🇮🇳印度',
      regex: /印度|🇮🇳|in|india/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/India.png'
    },
    {
      name: '🇯🇵日本',
      regex: /日本|🇯🇵|jp|japan/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Japan.png'
    },
    {
      name: '🇰🇵朝鲜',
      regex: /朝鲜|🇰🇵|kp|north korea/i,
      ratioLimit: 2,
      icon: 'https://cdn-icons-png.flaticon.com/128/330/330655.png'
    },
    {
      name: '🇰🇷韩国',
      regex: /韩|🇰🇷|kr|korea|south korea/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Korea.png'
    },
    {
      name: '🇲🇴澳门',
      regex: /澳门|🇲🇴|mo|macao|macau/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Macao.png'
    },
    {
      name: '🇲🇾马来西亚',
      regex: /马来|🇲🇾|my|malaysia/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Malaysia.png'
    },
    {
      name: '🇳🇱荷兰',
      regex: /荷兰|🇳🇱|nl|netherlands/i,
      ratioLimit: 2,
      icon: 'https://cdn-icons-png.flaticon.com/128/330/330448.png'
    },
    {
      name: '🇷🇺俄罗斯',
      regex: /俄罗斯|🇷🇺|ru|russia/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Russia.png'
    },
    {
      name: '🇸🇦沙特阿拉伯',
      regex: /沙特|🇸🇦|sa|saudi arabia/i,
      ratioLimit: 2,
      icon: 'https://cdn-icons-png.flaticon.com/128/330/330552.png'
    },
    {
      name: '🇸🇪瑞典',
      regex: /瑞典|🇸🇪|se|sweden/i,
      ratioLimit: 2,
      icon: 'https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Sweden.png'
    },
    {
      name: '🇸🇬新加坡',
      regex: /新加坡|🇸🇬|sg|singapore/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Singapore.png'
    },
    {
      name: '🇹🇷土耳其',
      regex: /土耳其|🇹🇷|tk|turkey/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Turkey.png'
    },
    {
      name: '🇹🇼台湾省',
      regex: /台湾|🇹🇼|tw|taiwan|tai wan/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Taiwan.png'
    },
    {
      name: '🇬🇧英国',
      regex: /英国|🇬🇧|uk|gb|united kingdom|great britain/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/United_Kingdom.png'
    },
    {
      name: '🇺🇸美国',
      regex: /美国|🇺🇸|us|united state|america/i,
      ratioLimit: 2,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/United_States.png'
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
      'DOMAIN-SUFFIX,api.bilibili.com,哔哩哔哩番剧解锁',
      'IP-ASN,4134,哔哩哔哩番剧解锁'
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
