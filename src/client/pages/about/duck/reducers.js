/**
 * Created by congnt on 6/16/18.
 */


"use strict";
import {FETCH_BANNER_ABOUT, FETCH_BANNER_SUCCESS_ABOUT} from "./types";

export default (state = {action: ''}, action) => {
    switch (action.type) {
        case FETCH_BANNER_SUCCESS_ABOUT :
            return {...state, banners: action.data.data};
        default :
            return state
    }
}
