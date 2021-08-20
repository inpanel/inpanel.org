module.exports = {
    title: 'InPanel',
    description: 'InPanel 开源Linux服务器管理面板',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'InPanel',
            description: 'An Open source Web-based Linux VPS Management Tools'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'InPanel',
            description: '开源Linux服务器管理面板'
        }
    },
    head: [
        ['meta', { name: 'keywords', content: 'InPanel, VPSMate, Linux, VPS, VPS Management, 开源, VPS管理面板, 开源Linux服务器管理面板' }],
        ['meta', { name: 'baidu-site-verification', content: '64Wi1MqMba' }],
        ['meta', { name: 'google-site-verification', content: 'lE5T54JZzDGH2Ougb83nRswErCNpS2fUByVdoT6lJ8w' }]
    ],
    themeConfig: {
        repo: 'inpanel/inpanel.org',
        docsBranch: 'main',
        editLinks: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Features', link: '/features' },
                    { text: 'Install', link: '/install' },
                    { text: 'Manual', link: '/manual' },
                    { text: 'Screenshot', link: '/screenshot' },
                    {
                        text: 'Learn More',
                        ariaLabel: 'Learn More',
                        items: [
                            { text: 'Changelog', link: '/changelog' },
                            { text: 'Source', link: 'https://github.com/inpanel/inpanel' }
                        ]
                    }
                ]
                // sidebar: {
                //     '/': [],
                //     '/nested/': []
                // }
            },
            '/zh/': {
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
                    { text: '功能截图', link: '/zh/screenshot' },
                    {
                        text: '了解更多',
                        ariaLabel: '了解更多',
                        items: [
                            { text: '版本历史', link: '/zh/changelog' },
                            { text: '源码', link: 'https://github.com/inpanel/inpanel' }
                        ]
                    }
                ]
                // sidebar: {
                //     '/zh/': [],
                //     '/zh/nested/': []
                // }
            }
        }
    }
}
