let webpack_base_config = require("./webpack.base.config");

let path = require('path');
let webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    ...webpack_base_config,
    //'react-hot-loader/patch': sử dụng để hot loader
    entry: ['./src/server/index.js'],
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
            ...webpack_base_config.module.rules
        ]
    },

    plugins: [
        ...webpack_base_config.plugins,
    ],
};