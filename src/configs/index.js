/**
 * Created by congnt on 6/17/18.
 */
"use strict";

let constants = require('../consts');
//initialize server here
Promise.prototype.executeHttp = function () {
    return this.then(result => {
        return new Promise((resolve, reject) => {
            if (result.status === 'success') {
                resolve(result);
            } else {
                reject(result);
            }
        });
    })
};

Promise.prototype.executeHttpSaga = async function () {
    let result = await this();
    if (result.status === 'success') {
        return ()=>result
    } else {
        return ()=>result
    }
};