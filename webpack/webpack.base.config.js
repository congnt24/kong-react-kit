const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
// const staticAssetName = true
//     ? '[path][name].[ext]?[hash:8]'
//     : '[hash:8].[ext]';
const isVerbose = true;

const webpack_base_config = {
    //development or production: production webpack sẽ auto optimize
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                // Khi gặp các file có extension là js hoặc jsx -> sử dụng babel-loader để bundle
                test: reScript,
                exclude: /node_module/,
                use: ['babel-loader'],
            },
            {// Khi gặp các file có extension là css -> sử dụng css-loader và style-loader để compile
                test: reStyle,
                // include: paths.appSrc,
                exclude: /node_module/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
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