import {filter, mapTo} from "rxjs/operators";
import NavigatorService from "../services/NavigatorService";
import {EXAMPLE} from "../actions/exampleActions";

export const exampleEpic = action$ =>
    action$.pipe(
        filter(action => action.type === EXAMPLE),
        mapTo(() => NavigatorService.navigate("Settings")),
    );