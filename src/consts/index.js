let envconsts;
switch (process.env.NODE_ENV){
    case 'production':
        envconsts = require('./production');
        break;
    case 'staging':
        envconsts = require('./staging');
        break;
    default:
        envconsts = require('./test');
        break;
}
const consts = {
    a: '123'
};

module.exports = Object.assign(consts, envconsts);