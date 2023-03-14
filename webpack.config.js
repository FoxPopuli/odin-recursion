const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Recursion',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpeg|gif|jpg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
}