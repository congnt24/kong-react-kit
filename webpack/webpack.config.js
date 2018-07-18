let webpack_base_config = require("./webpack.base.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require('path');
let webpack = require('webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const assetsPluginInstance = new AssetsPlugin({
    filename: 'assets.json',
    prettyPrint: true,
    metadata: {author: 'kongnt89'},
    manifestFirst: true,
});
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    ...webpack_base_config,
    //development or production: production webpack sẽ auto optimize
    //'react-hot-loader/patch': sử dụng để hot loader
    entry: {
        client: ['react-hot-loader/patch', 'babel-polyfill', './src/client/index.js', 'webpack-hot-middleware/client'],
        // vendors: ['react', 'react-dom', 'react-router-dom', 'lodash', 'moment']
    },
    output: {
        //chunk js thành các file nhỏ, có thể thay hash = file_name để ko bị thay đổi mỗi khi build lại
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve('./build'),
        publicPath: "/"
    },
    plugins: [
        ...webpack_base_config.plugins,
        new CleanWebpackPlugin(['build'],{
            root: process.cwd()
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new BundleAnalyzerPlugin(),
        assetsPluginInstance,
        // Sử dụng để hot reload resource
        new webpack.HotModuleReplacementPlugin(),
        //Sử dụng html template. trang index sẽ được load từ đây, sau đó react sẽ getElementById('root') và chèn AppComponent vào root
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp('\\.(js|css)$'),
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ],
    module: {
        rules: [
            ...webpack_base_config.module.rules
        ]
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // test: /react|react-dom/,
                    priority: -10,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        // minimizer: [
        //     new UglifyJsPlugin({
        //         cache: true,
        //         parallel: true,
        //         sourceMap: true
        //     })
        // ]
    },
    // Sử dụng dev Server: hot = true -> sử dụng hot reload
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};