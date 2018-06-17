import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Layout extends Component {
    render() {
        return (
            <div>
                {/*<div><p>breadcrumb {this.props.test_prop}: </p></div>*/}
                {this.props.children}
            </div>
        );
    }
}

export default connect(state => state)(Layout);

Layout.propTypes = {
    test_prop: PropTypes.string
}