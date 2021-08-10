import {all} from 'redux-saga/effects';
import {watchFetchAccount, watchFetchUsers} from './expenses/sagas';

function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchAccount()]);
}

export default rootSaga;
