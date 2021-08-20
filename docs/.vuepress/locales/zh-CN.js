module.exports = {
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    ariaLabel: '选择语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 编辑链接文字
    editLinkText: '在 GitHub 上编辑此页',
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
        { text: '首页', link: '/zh/' },
        { text: '功能特性', link: '/zh/features' },
        { text: '安装说明', link: '/zh/install' },
        { text: '使用手册', link: '/zh/manual' },
        // { text: '功能截图', link: '/zh/screenshot' },
        {
            text: '了解更多',
            ariaLabel: '了解更多',
            items: [
                { text: '源码', link: 'https://github.com/inpanel/inpanel' },
                {
                    text: '联系我们',
                    items: [
                        { text: '交流社区', link: '/zh/forum' },
                        { text: '程江开源', link: 'https://crogram.org' }
                    ]
                },
                {
                    text: '其他',
                    items: [
                        { text: '版本历史', link: '/zh/changelog' },
                        { text: '移动客户端', link: '/zh/mobile/' },
                        { text: '桌面客户端', link: '/zh/desktop/' }
                    ]
                }
            ]
        }
    ]
    // sidebar: 'auto'
    // sidebar: {
    //     '/zh/': [],
    //     '/zh/nested/': []
    // }
}
