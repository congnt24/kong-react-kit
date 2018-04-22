import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import history from "../../commons/history";
import {routerReducer, routerMiddleware, push} from 'react-router-redux'

const enhancers = [];
const middleware = [
    thunk,//We are using redux-thunk for using async actions
    routerMiddleware(history)
];
const reducers = {messageReducer};

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
);


//CombineRducers will combine your reducers all into one and store it inside reducer variable.
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    composedEnhancers
);
export default store;