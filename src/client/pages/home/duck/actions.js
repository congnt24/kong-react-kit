/**
 * Created by congnt on 6/16/18.
 */

"use strict";
import {FETCH_BANNER} from "./types";
export const fetchBannerAction = (position) => {
    return {type: FETCH_BANNER, position}
};
