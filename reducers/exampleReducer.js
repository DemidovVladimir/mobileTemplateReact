import {
    CONFIRM_SIGN_UP,
    CONFIRM_SIGN_UP_FAIL,
    CONFIRM_SIGN_UP_SUCCESS, SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS
} from '../actions/exampleActions';

const INITIAL_STATE = {
    username: null,
    phone_number: null,
    email: null,
    failure: null,
    registered: null,
    confirmedRegistration: null,
    response: null,
}

export default usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                phone_number: action.payload.phone_number,
                email: action.payload.email,
                registered: true
            }
        case SIGN_UP_FAIL:
            return {
                ...state,
                registered: false,
                failure: action.failure
            }
        case CONFIRM_SIGN_UP:
            return {
                ...state,
                username: action.payload.username
            }
        case CONFIRM_SIGN_UP_SUCCESS:
            return {
                ...state,
                registered: true,
                confirmedRegistration: true,
                response: action.response
            }
        case CONFIRM_SIGN_UP_FAIL:
            return {
                ...state,
                registered: false,
                confirmedRegistration: false,
                failure: action.failure
            }
        default:
            return state
    }
}
