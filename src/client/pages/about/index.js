/**
 * Created by congnt on 7/18/18.
 */
"use strict";


import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";
import Loadable from "react-loadable";

export default connect(state => state, null)(Loadable({
    loader: () => import('./About'),
    loading: Loading
}));