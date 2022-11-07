const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        clean: true,
        assetModuleFilename: 'asset/img/[name]_[hash][extnp]',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /.(css|scss|sass)$/,
                use: [miniCss.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                use: 'asset/resource',
            },
            {
                test: /\.png/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html',
            filename: 'index.html',
        }),
        new miniCss({
            filename: 'style.css',
        }),
    ],
    devServer: {
        compress: false,
        open: '/',
        port: 3001,
    },
}
