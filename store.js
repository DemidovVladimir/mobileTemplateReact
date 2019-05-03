import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {exampleReducer} from "./reducers/example-reducer";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root-saga';
import {dbReducer} from "./reducers/db-reducers";

const reducer = combineReducers({
    example: exampleReducer,
    dbclient: dbReducer
});

export const initializeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                sagaMiddleware,
                logger
            )
        )
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store
};

