import { defineConfig } from 'dumi'

let base, publicPath;

if (process.env.NODE_ENV === 'production') {
    base = '/k-view-react',
    publicPath= '/k-view-react/'
}

const conf = {
    title: 'K-View-React',
    mode: 'site',
    outputPath: 'site',
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath,
    navs: [
        {
            title: '介绍',
            path: '/guide'
        },
        {
            title: '组件',
            path: '/components',
        },
        {
            title: '贡献',
            path: '/contributing',
        },
        {
            title: 'Github',
            path: 'https://github.com/SoldierAb/k-view-react'
        }
    ],
    menus: {
        '/components': [
            {
                title: '组件',
                path: '/components',
                children: [
                    '/components/button.md',
                    /* PLOP_INJECT_MD */
'/components/popup-box.md',
                ]
            }
        ]
    }
}

export default defineConfig(conf)