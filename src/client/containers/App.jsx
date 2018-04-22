import React, {Component} from 'react';
import {Switch, BrowserRouter, StaticRouter} from 'react-router-dom';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import {renderRoutes} from "react-router-config";
import history from "../../commons/history";
import main_routes from "../../routes/index";

class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                {renderRoutes(main_routes)}
            </ConnectedRouter>
        )
    }
}

export default App;
