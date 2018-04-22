1. Cần 1 global store: tạo ra bằng hàm createStore(reducers, initState, middleware)


```js
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
```
2. Reducer chính là Subscriber => nó sẽ nhận message dựa theo action.type và sẽ update lại dữ liệu (state and data) ở trong store.


```js
import {SET_MESSAGE} from '../types/message';
const initState = {
    message: ''
};
export default (state = initState, action) => {
    switch (action.type) {
        case SET_MESSAGE :
            return {...state, message: action.payload.message};
        default :
            return state
    }
}
```

3. Actions: Chính là publisher => nó chỉ đơn giản là các function. chúng ta sẽ gọi nó vào các event của component
4. Để gán các states của store vào 1 component nào đó, ta sử dụng hàm connect() trong react-redux. Khi đó state sẽ được lấy bằng cách gọi: this.pros.tên_state
5. Để map các actions dispatch vào this.pros, ta thêm hàm map vào connect() như sau:

```js
const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about')
}, dispatch);

export default connect(state => state, mapDispatchToProps)(Home);
```

Như trên thí ta có thể gọi hàm changePage như sau

```js
<InputPreview value={message} onChange={this.props.dispatch(setMessage(value))}/>
```


