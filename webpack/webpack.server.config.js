let webpack_base_config = require("./webpack.base.config");
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
let path = require('path');
let webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    ...webpack_base_config,
    //'react-hot-loader/patch': sử dụng để hot loader
    entry: ['babel-polyfill', './src/server/index.js'],
    output: {
        //chunk js thành các file nhỏ, có thể thay hash = file_name để ko bị thay đổi mỗi khi build lại
        filename: 'server.js',
        path: path.resolve('./build'),
        publicPath: "/"
    },
    externals: nodeExternals(),
    target: "node",
    module: {
        rules: [
            ...webpack_base_config.module.rules,
            {// Khi gặp các file có extension là css -> sử dụng css-loader và style-loader để compile
                test: reStyle,
                // include: paths.appSrc,
                exclude: /node_module/,
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },

    plugins: [
        ...webpack_base_config.plugins,
    ],
};