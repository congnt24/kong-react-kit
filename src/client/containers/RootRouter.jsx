import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";

class RootRouter extends Component {
    render() {
        return (
            <div className="RootRouter">
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default RootRouter;
