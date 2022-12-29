module.exports = {
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    ariaLabel: '选择语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    backToHome: '返回首页',
    // 编辑链接文字
    editLinkText: '帮助我们改善此页面',
    lastUpdated: '上次更新',
    // Service Worker 的配置
    serviceWorker: {
        updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
        }
    },
    // 当前 locale 的 algolia docsearch 选项
    algolia: {},
    nav: [
        { text: '首页', link: '/zh-cn/' },
        { text: '功能特性', link: '/zh-cn/features' },
        { text: '安装说明', link: '/zh-cn/install' },
        { text: '使用手册', link: '/zh-cn/manual' },
        { text: '捐助项目', link: '/zh-cn/donation' },
        { text: '功能截图', link: '/zh-cn/screenshot' },
        {
            text: '了解更多',
            ariaLabel: '了解更多',
            items: [
                { text: '版本历史', link: '/zh-cn/changelog' },
                { text: '开发计划', link: '/zh-cn/todolist' },
                {
                    text: '联系我们',
                    items: [
                        { text: '交流社区', link: '/zh-cn/forum' },
                        { text: '程江开源', link: 'https://crogram.org' }
                    ]
                },
                {
                    text: '其他',
                    items: [
                        { text: '移动客户端', link: '/zh-cn/mobile/' },
                        { text: '桌面客户端', link: '/zh-cn/desktop/' }
                    ]
                }
            ]
        }
    ]
    // sidebar: 'auto'
    // sidebar: {
    //     '/zh-cn/': [],
    //     '/zh-cn/nested/': []
    // }
}
