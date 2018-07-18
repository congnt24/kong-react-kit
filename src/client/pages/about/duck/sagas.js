/**
 * Created by congnt on 6/16/18.
 */
"use strict";
import {HttpClient} from "../../../../utils/HttpClient";
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {FETCH_BANNER_ABOUT, FETCH_BANNER_ERROR_ABOUT, FETCH_BANNER_SUCCESS_ABOUT} from "./types";
import 'isomorphic-fetch';

function fetchBannerData(position) {
    return HttpClient.get('v2-common/banners/', {position});
}

function* fetchBanner(action) {
    try {
        const banners = yield call(fetchBannerData, action.position);
        yield put({type: FETCH_BANNER_SUCCESS_ABOUT, data: banners})
    } catch (err) {
        yield put({type: FETCH_BANNER_ERROR_ABOUT, data: err.stack})
    }
}


export default [takeEvery(FETCH_BANNER_ABOUT, fetchBanner)];