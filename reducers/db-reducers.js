import {actionTypes} from '../actions/db-actions';

export const initialState = {
    error: undefined,
    users: undefined,
    stitchClient: undefined,
    currentUser: undefined
}

// REDUCERS
export const dbReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_STITCH_CLIENT_SUCCESS:
            return {...state, stitchClient: action.payload}
        case actionTypes.USER_LOG_IN_SUCCESS:
            return {...state, currentUser: action.payload}
        case actionTypes.USER_LOG_IN_FAIL:
            return {...state, error: action.error}
        case actionTypes.USER_LOG_OUT:
            return {...state, currentUser: undefined}
        case actionTypes.FAIL_CONNECTION:
            return {...state, error: action.payload}
        case actionTypes.GET_USERS_SUCCESS:
            const users = action.payload.map(user => ({
                key: user.name
            }));
            return {...state, users}
        case actionTypes.GET_USERS_FAIL:
            return {...state, error: action.payload}
        default:
            return state
    }
}
