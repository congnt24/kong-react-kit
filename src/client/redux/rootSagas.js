import mySaga from "../pages/home/duck/sagas";
import mySaga2 from "../pages/about/duck/sagas";
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...mySaga, ...mySaga2
    ])
}