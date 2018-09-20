import React, {Component} from 'react';
import Layout from "../../layouts/Layout";
import {renderRoutes} from "react-router-config";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import {fetchBannerAction} from "./duck/actions";
import BannerHomeContainer from './containers/BannerHomeContainer'
import VntripServices from "./components/VntripServices";
import HotPlaces from "./components/HotPlaces";
import Loadable from 'react-loadable';


class Home extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.dispatch(fetchBannerAction('home_slideshow'))
    }

    render() {
        return (
            <Layout test_prop="kghkjhjk">
                <div>
                    <BannerHomeContainer />
                    <VntripServices/>
                    <HotPlaces/>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </Layout>
        );
    }
}

//Tạo ra các function cho this.pros
const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        changePage: () => push('/about')
    }, dispatch);
    return {...actions, dispatch}
}

export default connect(state => state, mapDispatchToProps)(Home);
