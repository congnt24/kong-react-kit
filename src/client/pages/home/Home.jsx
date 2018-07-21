import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Layout from "../../layouts/Layout";
import {Link} from 'react-router-dom'
import {renderRoutes} from "react-router-config";
import {fetchBannerAction} from "./duck/actions";
import BannerHomeContainer from './containers/BannerHomeContainer'
import VntripServices from "./components/VntripServices";
import HotPlaces from "./components/HotPlaces";
import Helmet from 'react-helmet';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        //Use for ssr saga
        // if (typeof window === 'undefined' || !window.__INITIAL_STATE__) {
            this.props.dispatch(fetchBannerAction('home_slideshow'))
        // } else {
        //     window.__INITIAL_STATE__ = undefined
        // }
    }

    render() {
        return (
            <Layout test_prop="Home">
                <Helmet title="Home"/>
                <div>
                    <BannerHomeContainer/>
                    <VntripServices/>
                    <HotPlaces/>
                    <Link to="/about">About</Link>
                    <Button variant="raised" color="primary"
                            onClick={() => this.props.changePage()}>About</Button>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </Layout>
        );
    }
}

export default Home
