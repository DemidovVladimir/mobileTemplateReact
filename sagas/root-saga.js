import {all, fork} from 'redux-saga/effects';
import {
    getDbClient,

} from "./db-saga";

export default function* rootSaga() {
    yield all([
        fork(getDbClient)
    ]);
}