import {combineEpics} from 'redux-observable';
import {
    exampleEpic
} from './epics/exampleEpic';

export default combineEpics(
    exampleEpic
);
