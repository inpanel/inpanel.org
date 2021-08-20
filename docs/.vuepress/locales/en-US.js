module.exports = {
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
}
