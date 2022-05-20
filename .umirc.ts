import { defineConfig } from 'dumi'

let base, publicPath;

console.log(process.env)

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
    publicPath
}

console.log('umi conf:  ',conf)

export default defineConfig(conf)