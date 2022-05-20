import { defineConfig } from 'dumi'

let base, publicPath;

if (process.env.SITE_ENV === 'PREVIEW') {
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
    publicPath
}

export default defineConfig(conf)