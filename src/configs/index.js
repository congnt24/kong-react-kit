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