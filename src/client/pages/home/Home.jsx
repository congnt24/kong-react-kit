import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Layout from "../../layouts/Layout";
import {Link} from 'react-router-dom'
import {renderRoutes} from "react-router-config";
import InputPreview from "../../components/input/InputPreview";
import {connect} from 'react-redux';
import {setMessage} from "../../redux/actions/message";
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import {fetchBannerAction} from "./duck/actions";
import BannerHomeContainer from './containers/BannerHomeContainer'
import VntripServices from "./components/VntripServices";
import HotPlaces from "./components/HotPlaces";

class Home extends Component {
    constructor(props){
        super(props)
    }
    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    };

    render() {
        this.props.dispatch(fetchBannerAction('home_slideshow'))
        const {message} = this.props.messageReducer;
        return (
            <Layout test_prop="kghkjhjk">
                <div>
                    <BannerHomeContainer />
                    <VntripServices/>
                    <HotPlaces/>
                    <Link to="/about">About</Link>
                    <Button variant="raised" color="primary"
                            onClick={() => this.props.changePage()}>About</Button>
                    <InputPreview value={message} onChange={this._onChange}/>
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
