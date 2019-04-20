import {EXAMPLE} from "../actions/exampleActions";

const INITIAL_STATE = {
    username: null,
    phone_number: null,
    email: null,
    failure: null,
    registered: null,
    confirmedRegistration: null,
    response: null,
};

export default exampleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXAMPLE:
            return {
                ...state
            }
        default:
            return state
    }
}
