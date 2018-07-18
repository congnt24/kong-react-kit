/**
 * Created by congnt on 6/17/18.
 */
"use strict";
let envconsts;
switch (process.env.NODE_ENV){
    case 'production':
        envconsts = require('../configs/production');
        break;
    case 'staging':
        envconsts = require('../configs/staging');
        break;
    default:
        envconsts = require('../configs/test');
        break;
}
const consts = {
    a: '123'
};

module.exports = Object.assign(consts, envconsts);
