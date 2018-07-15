/**
 * Created by congnt on 6/16/18.
 */
"use strict";
import {HttpClient} from "../../../../utils/HttpClient";
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {FETCH_BANNER, FETCH_BANNER_ERROR, FETCH_BANNER_SUCCESS} from "./types";
import 'isomorphic-fetch';

function fetchBannerData(position) {
    return HttpClient.get('v2-common/banners/', {position});
}

function* fetchBanner(action) {
    try {
        const banners = yield call(fetchBannerData, action.position);
        yield put({type: FETCH_BANNER_SUCCESS, data: banners})
    } catch (err) {
        yield put({type: FETCH_BANNER_ERROR, data: err.stack})
    }
}


export default [takeEvery(FETCH_BANNER, fetchBanner)];