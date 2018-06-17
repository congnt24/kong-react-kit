import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import history from "../../commons/history";
import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from "../pages/home/duck/sagas";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
import homeReducer from '../pages/home/duck/reducers';
const enhancers = [];
const middleware = [
    sagaMiddleware,
    thunk,//We are using redux-thunk for using async actions
    routerMiddleware(history)
];
const reducers = {messageReducer, homeReducer};

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
sagaMiddleware.run(mySaga);


export default store;