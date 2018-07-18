/**
 * Created by congnt on 7/15/18.
 */
"use strict";

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