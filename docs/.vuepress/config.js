const locales = require('./locales/index')
const localesConfig = require('./locales/localesConfig')

module.exports = {
    title: 'InPanel',
    description: 'InPanel 开源Linux服务器管理面板',
    locales: locales,
    head: [
        ['meta', { name: 'author', content: 'CROGRAM' }],
        ['meta', { name: 'copyright', content: 'CROGRAM 程江开源' }],
        ['meta', { name: 'keywords', content: 'InPanel, VPSMate, Linux, VPS, VPS Management, 开源, VPS管理面板, 开源Linux服务器管理面板' }],
        ['meta', { name: 'baidu-site-verification', content: '64Wi1MqMba' }],
        ['meta', { name: 'google-site-verification', content: 'lE5T54JZzDGH2Ougb83nRswErCNpS2fUByVdoT6lJ8w' }]
    ],
    themeConfig: {
        repo: 'inpanel/inpanel.org',
        docsBranch: 'main',
        editLinks: true,
        locales: localesConfig
    }
}
