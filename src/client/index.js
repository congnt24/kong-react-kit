import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import {AppContainer} from 'react-hot-loader'


import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
// import rootSaga from "./redux/rootSagas";
// configureStore.runSaga(rootSaga);
//Đây là entry point của webpack -> webpack sẽ compile từ file này dựa trên file html_template
//Để sử dụng hot loader, ta bọc component app bởi AppContainer. Khi nào code thay đổi, ta sẽ render lại APP
let render = (Component) => ReactDOM.render(
    <Provider store={configureStore()}>
        <AppContainer>
            <Component/>
        </AppContainer>
    </Provider>
    , document.getElementById('root'));

render(App);
// Webpack Hot Module Replacement API
module.hot.accept('./containers/App', () => render(require('./containers/App').default));