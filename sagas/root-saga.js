import {all, fork} from 'redux-saga/effects';
import {
    loadStitchClient,
    userLogIn,
    getUsers,
    userLogOut
} from "./db-saga";

export default function* rootSaga() {
    yield all([
        fork(loadStitchClient),
        fork(userLogIn),
        fork(getUsers),
        fork(userLogOut)
    ]);
}