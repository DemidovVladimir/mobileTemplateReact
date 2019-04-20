import {
    CONFIRM_SIGN_UP_SUCCESS,
} from "../actions/exampleActions";
import {catchError, filter, map, mapTo, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import NavigatorService from "../services/NavigatorService";

export const exampleEpic = action$ =>
    action$.pipe(
        filter(action => action.type === START),
        mapTo(() => NavigatorService.navigate("Documents")),
    );