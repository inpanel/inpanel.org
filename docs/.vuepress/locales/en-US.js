module.exports = {
    selectLanguageText: 'Languages',
    selectLanguageAriaLabel: 'Languages',
    selectLanguageName: 'English',
    editLinkText: 'Edit this page on GitHub',
    lastUpdatedText: 'Last Updated',
    contributorsText: 'Contributors',
    toggleDarkMode: 'Toggle Darkmode',
    serviceWorker: {
        updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
        }
    },
    algolia: {},
    navbar: [
        { text: 'Home', link: '/' },
        { text: 'Features', link: '/features' },
        { text: 'Install', link: '/install' },
        { text: 'Manual', link: '/manual' },
        { text: 'Screenshot', link: '/screenshot' },
        {
            text: 'Learn More',
            ariaLabel: 'Learn More',
            children: [
                { text: 'Changelog', link: '/changelog' },
                { text: 'TodoList', link: '/todolist' },
                {
                    text: 'Contact',
                    children: [
                        { text: 'Forum', link: '/forum' },
                        { text: 'Crogram', link: 'https://crogram.org' }
                    ]
                },
                {
                    text: 'Resources',
                    children: [
                        { text: 'InPanel Mobile App', link: '/mobile/' },
                        { text: 'InPanel Desktop Client', link: '/desktop/' }
                    ]
                }
            ]
        }
    ]
}
