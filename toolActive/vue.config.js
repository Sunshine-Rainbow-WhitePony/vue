const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    lintOnSave: false,
    // baseUrl: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("_c", resolve("src/components"))


        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => {
                return {
                    limit: 4096,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: `images/gedeTool.[name].[ext]`
                        }
                    }
                };
            })

        /* config.plugin('extract-css').tap(args => [{
            filename: `css/gedeTool.[name].css`,
            chunkFilename: `css/gedeTool.[name].css`
        }]) */
    },
    //打包时不生成map文件
    productionSourceMap: false,
    devServer: {
        proxy: 'https://xyhd.chaoxing.com',
    },
    // publicPath: '../',
    indexPath: 'views/gedeToolIndex.html',
    filenameHashing: false,
    configureWebpack: {
        output: {
            filename: `js/gedeTool.[name].js`,
            chunkFilename: `js/gedeTool.[name].js`
        },
    },
}