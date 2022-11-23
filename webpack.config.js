const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        clean: true,
        assetModuleFilename: 'asset/[name]_[hash][ext]',
        environment: {
            arrowFunction: false,
        },
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
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /.(css|scss|sass)$/,
                use: [miniCss.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][hash][ext]',
                },
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
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        compress: false,
        open: '/',
        port: 3001,
        watchFiles: '*.html',
    },
}
