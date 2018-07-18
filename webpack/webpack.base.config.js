let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
// const staticAssetName = true
//     ? '[path][name].[ext]?[hash:8]'
//     : '[hash:8].[ext]';
const isVerbose = false;
const webpack_base_config = {
    //development or production: production webpack sẽ auto optimize
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
                // Khi gặp các file có extension là js hoặc jsx -> sử dụng babel-loader để bundle
                test: reScript,
                exclude: /node_module/,
                use: ['babel-loader'],
            },
        ]
    },
    stats: {
        cached: isVerbose,
        cachedAssets: isVerbose,
        chunks: isVerbose,
        chunkModules: isVerbose,
        colors: true,
        hash: isVerbose,
        modules: isVerbose,
        reasons: true,
        timings: true,
        version: isVerbose,
    }
};

module.exports = webpack_base_config;