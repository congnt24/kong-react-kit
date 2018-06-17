/**
 * Created by congnt on 6/17/18.
 */

"use strict";
import {connect} from 'react-redux';
import BannerHome from "../components/BannerHome";
import {fetchBannerAction} from "../duck/actions";

const mapStateToProps = (state) => {
    let banners = [];
    if (state.homeReducer.banners) {
        banners = state.homeReducer.banners.map(bn => ({id: bn.id, ...bn.medias.filter(i => i.screen_type === 'WIDESCREEN')[0]}))
    }
    return {
        banners
    }
};

export default connect(mapStateToProps, null)(BannerHome);