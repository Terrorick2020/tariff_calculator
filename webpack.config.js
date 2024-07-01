const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
    mode: 'development',
    entry: path.resolve( __dirname, 'src/index.js'  ),
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'asset/[name][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|ico|png)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ]
    },
    devServer: {
        port: 1111,
        compress: true,
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/asset',
                    to: 'asset'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
        })
    ]
}