/**
 * Created by congnt on 7/18/18.
 */
"use strict";

import Loading from "../../components/loading/Loading";
import Loadable from "react-loadable";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";


//Tạo ra các function cho this.pros
const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        changePage: () => push('/about')
    }, dispatch);
    return {...actions, dispatch}
};
export default connect(state => state, mapDispatchToProps)(Loadable({
    loader: () => import('./Home'),
    loading: Loading
}));