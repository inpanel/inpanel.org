const locales = require('./locales/index')
const localesConfig = require('./locales/localesConfig')

module.exports = {
    title: 'InPanel',
    description: 'InPanel 开源Linux服务器管理面板',
    locales: locales,
    head: [
        ['meta', { name: 'renderer', content: 'webkit' }],
        ['meta', { name: 'force-rendering', content: 'webkit' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' }],
        ['meta', { name: 'author', content: 'CROGRAM' }],
        ['meta', { name: 'copyright', content: 'CROGRAM 程江开源' }],
        ['meta', { name: 'keywords', content: 'InPanel, VPSMate, Linux, VPS, VPS Management, 开源, VPS管理面板, 开源Linux服务器管理面板' }],
        ['meta', { name: 'baidu-site-verification', content: '64Wi1MqMba' }],
        ['meta', { name: 'google-site-verification', content: 'nVe7i2-fReHI71JNDMSHGjAOHegbpB4y9MIJUx8xkzw' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['script', { async: true, type: 'text/javascript', src: 'https://www.googletagmanager.com/gtag/js?id=G-C63STQF95T' }],
        ['script', { async: true, type: 'text/javascript' }, 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-C63STQF95T");']        
    ],
    themeConfig: {
        repo: 'inpanel/inpanel',
        docsRepo: 'inpanel/inpanel.org',
        docsBranch: 'main',
        docsDir: 'docs/', // 文档源文件存放在仓库中的目录名
        editLinks: true,
        lastUpdated: true,
        logo: '/images/logo_128x128.png',
        locales: localesConfig
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['@vuepress/medium-zoom'],
        ['@vuepress/nprogress'],
        ['@vuepress/search', { searchMaxSuggestions: 10 }]
    ]
}
