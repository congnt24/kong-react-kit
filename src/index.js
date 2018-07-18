import webpack from 'webpack';
import webpack_client from '../webpack/webpack.config';
import webpack_server from '../webpack/webpack.server.config';
import {exec, spawn} from 'child_process';

let webpacks = [];
if (process.argv.includes('--client')) {
    webpacks.push(webpack_client)
}
if (process.argv.includes('--server')) {
    webpacks.push(webpack_server)
}

webpack(webpacks).run((err, stats) => {
    console.info(stats.toString(webpack_client.stats));
    if (stats.hasErrors()) {
        throw new Error('Webpack compilation errors');
    }
});
