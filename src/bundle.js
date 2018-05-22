import webpack from 'webpack';
import webpack_client from '../webpack/webpack.config';


webpack(webpack_client).run((err, stats) => {
    console.info(stats.toString(webpack_client.stats));

    if (stats.hasErrors()) {
        throw new Error('Webpack compilation errors');
    }
});




