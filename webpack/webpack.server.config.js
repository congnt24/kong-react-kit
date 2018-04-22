let webpack_base_config = require("./webpack.base.config");

let path = require('path');
let webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { ...webpack_base_config,
    //'react-hot-loader/patch': sử dụng để hot loader
    entry: './src/index.js',
    output: {
        //chunk js thành các file nhỏ, có thể thay hash = file_name để ko bị thay đổi mỗi khi build lại
        filename: 'index.js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/"
    },
    externals: nodeExternals(),
    target: "node",
    module: {
        rules: [{
                // Khi gặp các file có extension là js hoặc jsx -> sử dụng babel-loader để bundle
                test: /\.jsx?$/,
                exclude: /node_module/,
                use: ['babel-loader'],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'production'`
            }
        })
    ],
};