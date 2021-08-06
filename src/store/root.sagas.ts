import {all} from 'redux-saga/effects';
import {watcherFetchUsers} from './expenses/sagas';

export default function* rootSaga() {
  yield all([watcherFetchUsers()]);
}
