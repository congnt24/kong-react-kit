import React, {Component} from 'react';
import {fetchBannerAction} from "./duck/actions";
import {connect} from "react-redux";
import BannerAboutContainer from './containers/BannerAboutContainer'
import Helmet from 'react-helmet';
import Loading from "../../components/loading/Loading";
import Loadable from "react-loadable";

class About extends Component {
    componentWillMount() {
        //Use for ssr saga
        // if (typeof window === 'undefined' || !window.__INITIAL_STATE__) {
        this.props.dispatch(fetchBannerAction('home_slideshow'))
        // }
    }

    render() {
        return (
            <div className="About">
                <Helmet title="About"
                        meta={[
                            {name: 'description', content: 'Description'}
                        ]}/>
                <h1>This is About page</h1>
                <BannerAboutContainer/>
            </div>
        );
    }
}
export default About