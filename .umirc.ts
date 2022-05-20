import { defineConfig } from 'dumi'

const conf = {
    title: 'K-View-React',
    mode: 'site',
    outputPath: 'site',
    exportStatic: {},
    dynamicImport: {},

}


if (process.env.SITE_ENV === 'PREVIEW') {
    Object.assign(
        conf,
        {
            base: '/k-view-react',
            publicPath: '/k-view-react/'
        }
    )
}

export default defineConfig(conf)