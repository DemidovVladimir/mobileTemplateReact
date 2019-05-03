import { put, take, call } from 'redux-saga/effects';
import { Stitch, AnonymousCredential} from 'mongodb-stitch-react-native-sdk';
import {RemoteMongoClient} from 'mongodb-stitch-react-native-services-mongodb-remote';
import {actionTypes} from '../actions/db-actions';

export function* getDbClient() {
    try {
        while(true) {
            yield take('GET_USERS');
            const stitchAppClient = yield call(Stitch.initializeDefaultAppClient, 'crossroad-gjotw');
            console.log(stitchAppClient, ' - - - - - this is the app client....');
            // console.log(stitchAppClient.auth, ' - - -  - - - - auth...');
            const db = stitchAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('test');
            console.log(db, ' - - - - - - db........');
            yield call(stitchAppClient.auth.loginWithCredential, new AnonymousCredential());

            const usersCollection = yield call(db.collection, 'users');
            console.log(usersCollection, ' - - - - - - users collection....');

            const users = yield call(usersCollection.find, {});
            console.log(users, ' - - - - - - - - users.....');


            // const client = yield call(stitchAppClient.auth.loginWithCredential, new AnonymousCredential());
            // console.log(client,' - - - - - client...');
            //
            // const mongoClient = yield call(stitchAppClient.getServiceClient, RemoteMongoClient.factory, 'mongodb-atlas');
            // const db = yield call(mongoClient.db, 'test');
            // const usersCollection = yield call(db.collection, 'users');





            // const client = yield call(stitchAppClient.auth.loginWithCredential, 'crossroad-gjotw');
            // yield put({type: actionTypes.GET_DB_CLIENT_SUCCESS, data: client});
            // const dbClient = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
            // const db = dbClient.db("greetings");
            // yield put({type: actionTypes.GET_DB_SUCCESS, data: db});
            // const users = yield call(fetchUsers, db);
            // const users = yield call(usersCollection.find, {});
            yield put({type: 'GET_USERS_SUCCESS', data: users})
        }
    } catch (error) {
        yield put({type: 'FAIL_CONNECTION', error});
    }
}

function* getAtlasClient(client) {
    for(let i = 0; i < 5; i++) {
        try {
            // const db = client.service("mongodb", "mongodb-atlas").db("test");
            return client
        } catch(err) {
        }
    }
    // attempts failed after 5 attempts
    throw new Error('Mongo connection failed');
}

function* fetchUsers(db) {
    for(let i = 0; i < 5; i++) {
        try {
            // const users = this.db.collection("users");
            // return users.find({})
            return 'users'
        } catch(err) {
        }
    }
    // attempts failed after 5 attempts
    throw new Error('Mongo connection failed');
}

