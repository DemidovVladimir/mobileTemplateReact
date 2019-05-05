export const actionTypes = {
    GET_STITCH_CLIENT: 'GET_STITCH_CLIENT',
    GET_STITCH_CLIENT_SUCCESS: 'GET_STITCH_CLIENT_SUCCESS',
    FAIL_CONNECTION: 'FAIL_CONNECTION',
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    USER_LOG_IN: 'USER_LOG_IN',
    USER_LOG_IN_SUCCESS: 'USER_LOG_IN_SUCCESS',
    USER_LOG_OUT: 'USER_LOG_OUT',
    USER_LOG_IN_FAIL: 'USER_LOG_IN_FAIL',
    USER_LOG_OUT_SUCCESS: 'USER_LOG_OUT_SUCCESS',
    USER_LOG_OUT_FAIL: 'USER_LOG_OUT_FAIL',
    GET_USERS_FAIL: 'GET_USERS_FAIL'
}

export const getStitchClient = () => dispatch => {
    return dispatch({type: actionTypes.GET_STITCH_CLIENT})
}

export const getStitchClientSuccess = data => dispatch => {
    return dispatch({type: actionTypes.GET_STITCH_CLIENT_SUCCESS, payload: data})
}

export const userLogIn = () => dispatch => {
    return dispatch({ type: actionTypes.USER_LOG_IN })
}

export const userLogOut = () => dispatch => {
    return dispatch({ type: actionTypes.USER_LOG_OUT })
}

export const userLogInSuccess = data => dispatch => {
    return dispatch({ type: actionTypes.USER_LOG_IN_SUCCESS, payload: data })
}

export const userLogOutSuccess = data => dispatch => {
    return dispatch({ type: actionTypes.USER_LOG_OUT_SUCCESS, payload: data })
}

export const userLogInFail = error => dispatch => {
    return dispatch({ type: actionTypes.USER_LOG_IN_FAIL, payload: error })
}

export const userLogOutFail = error => dispatch => {
    return dispatch({ type: actionTypes.USER_LOG_OUT_FAIL, payload: error })
}

export const failToConnect = error => dispatch => {
    return dispatch({type: actionTypes.FAIL_CONNECTION, payload: error})
}

export const getUsers = () => dispatch => {
    return dispatch({type: actionTypes.GET_USERS})
}

export const getUsersSuccess = data => dispatch => {
    return dispatch({type: actionTypes.GET_USERS_SUCCESS, payload: data})
}

export const getUsersFail = error => dispatch => {
    return dispatch({type: actionTypes.GET_USERS_FAIL, payload: error})
}