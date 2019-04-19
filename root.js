import {combineEpics} from 'redux-observable';
import {
    confirmTruckDriverSignUpEpic,
    registerTruckDriverEpic,
    provideDocumentsEpic,
    sendDocumentEpic,
    sendDocumentSuccessEpic
} from './epics/registerTruckDriverEpic';

export default combineEpics(
    registerTruckDriverEpic,
    confirmTruckDriverSignUpEpic,
    provideDocumentsEpic,
    sendDocumentEpic,
    sendDocumentSuccessEpic
);
