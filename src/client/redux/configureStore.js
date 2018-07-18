import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import history from "../../commons/history";
import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import createSagaMiddleware, {END} from 'redux-saga'
// create the saga middleware
import homeReducer from '../pages/home/duck/reducers';
import aboutReducer from '../pages/about/duck/reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = [];
    const middleware = [
        sagaMiddleware,
        thunk,//We are using redux-thunk for using async actions
        routerMiddleware(history)
    ];
    const reducers = {homeReducer, aboutReducer};
    const composedEnhancers = composeWithDevTools(
        applyMiddleware(...middleware),
        ...enhancers
    );
    const store = createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        initialState,
        composedEnhancers
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store
}