const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/style.css',
    mode: 'development',
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                use: 'file-loader',
            },
            {
                test: /\.(svg)$/,
                use: 'svg-inline-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../public/index.html',
        }),
    ],
    devServer: {
        compress: false,
        open: '/',
        port: 3001,
    },
}
