let webpack_base_config = require("./webpack.base.config");

let path = require('path');
let webpack = require('webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...webpack_base_config,
    //development or production: production webpack sẽ auto optimize
    //'react-hot-loader/patch': sử dụng để hot loader
    entry: ['react-hot-loader/patch', 'babel-polyfill', './src/client/index.js'],
    output: {
        //chunk js thành các file nhỏ, có thể thay hash = file_name để ko bị thay đổi mỗi khi build lại
        filename: 'bundle.[name].js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/"
    },
    plugins: [
        // Sử dụng để hot reload resource
        new webpack.HotModuleReplacementPlugin(),
        //Sử dụng html template. trang index sẽ được load từ đây, sau đó react sẽ getElementById('root') và chèn AppComponent vào root
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        })
    ],
    optimization: {
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
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
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