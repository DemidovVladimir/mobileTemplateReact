import {actionTypes} from '../actions/example-actions';

export const exampleInitialState = {
    data: null,
    error: null
}

// REDUCERS
export const exampleReducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_SUCCESS:
            return {...state, data: action.payload}
        case actionTypes.API_FAIL:
            return {...state, error: action.payload}
        default:
            return state
    }
}