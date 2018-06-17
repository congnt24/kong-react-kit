/**
 * Created by congnt on 6/16/18.
 */
"use strict";
import {HttpClient} from "../../../../utils/HttpClient";
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {FETCH_BANNER, FETCH_BANNER_ERROR, FETCH_BANNER_SUCCESS} from "./types";

 function fetchBannerData(position) {
    return HttpClient.get('v2-common/banners/', {position})
}
function* fetchBanner(action) {
    try {
        const banners = yield call(fetchBannerData, action.position);
        yield put({type: FETCH_BANNER_SUCCESS, data: banners})
    } catch (err) {
        console.error(err);
        
        yield put({type: FETCH_BANNER_ERROR, data: err.stack})
    }
}


function* mySaga() {
    yield takeEvery(FETCH_BANNER, fetchBanner)
}


export default mySaga;