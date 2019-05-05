import {put, select, take} from 'redux-saga/effects';
import {
    actionTypes,
    failToConnect,
    getStitchClientSuccess,
    getUsersFail,
    getUsersSuccess,
    userLogInFail,
    userLogInSuccess,
    userLogOutFail,
    userLogOutSuccess
} from '../actions/db-actions';
import {AnonymousCredential, Stitch} from 'mongodb-stitch-react-native-sdk';

export function* loadStitchClient() {
    try {
        while (true) {
            yield take(actionTypes.GET_STITCH_CLIENT);
            const payload = yield Stitch.initializeDefaultAppClient('crossroad-zyama');
            yield put(getStitchClientSuccess(payload))
        }
    } catch (error) {
        yield put(failToConnect(error));
    }
}

export function* userLogIn() {
    try {
        while (true) {
            yield take(actionTypes.USER_LOG_IN);
            const stitchClient = yield select(state => state.dbclient.stitchClient);
            const user = yield stitchClient.auth.loginWithCredential(new AnonymousCredential());
            yield put(userLogInSuccess(user.id));
        }
    } catch (error) {
        yield put(userLogInFail(error));
    }
}

export function* getUsers() {
    try {
        while (true) {
            yield take(actionTypes.GET_USERS);
            const stitchCLient = yield select(state => state.dbclient.stitchClient);
            const users = yield stitchCLient.callFunction("test", []);
            yield put(getUsersSuccess(users));
        }
    } catch (error) {
        yield put(getUsersFail(error))
    }
}

export function* userLogOut() {
    try {
        while (true) {
            yield take(actionTypes.USER_LOG_OUT);
            const stitchCLient = yield select(state => state.dbclient.stitchClient);
            yield stitchCLient.auth.logout();
            yield put(userLogOutSuccess())
        }
    } catch (error) {
        yield put(userLogOutFail(error))
    }
}
