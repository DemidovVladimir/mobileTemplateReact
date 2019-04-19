import {
    CONFIRM_SIGN_UP,
    CONFIRM_SIGN_UP_SUCCESS,
    confirmSignUpFail,
    confirmSignUpSuccess,
    SEND_DOCUMENT,
    SIGN_UP,
    signUpFail,
    sendDocumentSuccess,
    sendDocumentError, SEND_DOCUMENT_SUCCESS
} from "../actions/registerTruckDriverActions";
import {catchError, filter, map, mapTo, switchMap, withLatestFrom, tap} from "rxjs/operators";
import {Auth} from "aws-amplify";
import {from, of} from "rxjs";
import NavigatorService from "../services/NavigatorService";
import { Storage } from 'aws-amplify'


export const registerTruckDriverEpic = action$ =>
    action$.pipe(
        filter(action => action.type === SIGN_UP),
        map(({payload}) => payload),
        switchMap(payload =>
            from(Auth.signUp({
                username: payload.username,
                password: payload.password,
                attributes: {
                    email: payload.email,
                    phone_number: payload.phone_number
                }
            })).pipe(
                mapTo(() => NavigatorService.navigate("Confirmation")),
                catchError(error => of(new signUpFail(error)))
            )
        )
    );

export const confirmTruckDriverSignUpEpic = action$ =>
    action$.pipe(
        filter(action => action.type === CONFIRM_SIGN_UP),
        map(({payload}) => payload),
        switchMap(payload =>
            from(Auth.confirmSignUp(payload.username, payload.authCode)).pipe(
                map(results => new confirmSignUpSuccess(results)),
                catchError(error => of(new confirmSignUpFail(error)))
            )
        )
    );

export const provideDocumentsEpic = action$ =>
    action$.pipe(
        filter(action => action.type === CONFIRM_SIGN_UP_SUCCESS),
        mapTo(() => NavigatorService.navigate("Documents")),
    );

export const sendDocumentEpic = (action$, state$)=>
    action$.pipe(
        filter(action => action.type === SEND_DOCUMENT),
        withLatestFrom(state$),
        switchMap(([action, state]) => {
            return from(Storage.put(`${state.truckDriver.username}-${action.document}.gif`, action.buffer, {
                contentType: 'image/gif'
            }))
        }),
        map(() => new sendDocumentSuccess()),
        catchError(error => of(new sendDocumentError(error)))
    );

export const sendDocumentSuccessEpic = action$ =>
    action$.pipe(
        filter(action => action.type === SEND_DOCUMENT_SUCCESS),
        mapTo(() => NavigatorService.navigate("Home"))
    );
