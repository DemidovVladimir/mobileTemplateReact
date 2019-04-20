export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const CONFIRM_SIGN_UP = "CONFIRM_SIGN_UP";
export const CONFIRM_SIGN_UP_SUCCESS = "CONFIRM_SIGN_UP_SUCCESS";
export const CONFIRM_SIGN_UP_FAIL = "CONFIRM_SIGN_UP_FAIL";
export const SEND_DOCUMENT = "SEND DOCUMENT";
export const SEND_DOCUMENT_SUCCESS = "SEND_DOCUMENT_SUCCESS";
export const SEND_DOCUMENT_ERROR = "SEND_DOCUMENT_ERROR";

export const signUp = data => ({
    type: SIGN_UP,
    payload: data
});

export const signUpSuccess = data => ({
    type: SIGN_UP_SUCCESS,
    payload: data
});

export const signUpFail = failure => ({
    type: SIGN_UP_FAIL,
    failure
});

export const confirmSignUp = data => ({
    type: CONFIRM_SIGN_UP,
    payload: data
});

export const confirmSignUpSuccess = response => ({
    type: CONFIRM_SIGN_UP_SUCCESS,
    response
});

export const confirmSignUpFail = failure => ({
    type: CONFIRM_SIGN_UP_FAIL,
    failure
});

export const sendDocument = (buffer, document) => ({
    type: SEND_DOCUMENT,
    buffer,
    document
});

export const sendDocumentSuccess = () => ({
   type: SEND_DOCUMENT_SUCCESS
});

export const sendDocumentError = error => ({
    type: SEND_DOCUMENT_ERROR,
    error
});