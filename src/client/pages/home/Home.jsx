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

class Home extends Component {
    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    };

    render() {
        const {message} = this.props.messageReducer;
        return (
            <Layout test_prop="kghkjhjk">
                <div>
                    <h1>This is HOME mjsgkaghsk Page.</h1>
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
const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about')
}, dispatch);

export default connect(state => state, mapDispatchToProps)(Home);
