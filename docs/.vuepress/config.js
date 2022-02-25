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
        ['meta', { name: 'google-site-verification', content: 'lE5T54JZzDGH2Ougb83nRswErCNpS2fUByVdoT6lJ8w' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        repo: 'inpanel/inpanel',
        docsRepo: 'inpanel/inpanel.org',
        docsBranch: 'main',
        docsDir: 'docs/', // 文档源文件存放在仓库中的目录名
        editLink: true,
        lastUpdated: true,
        logo: '/images/logo_128x128.png',
        locales: localesConfig
    },
    plugins: [
        ['@vuepress/plugin-back-to-top', true],
        [
            '@vuepress/plugin-google-analytics',
            {
                ga: 'G-304994720'
            }
        ],
        [
            '@vuepress/plugin-search',
            {
                locales: { '/': { placeholder: 'Search' }, '/zh-cn/': { placeholder: '搜索' } }
            }
        ]
    ]
}
