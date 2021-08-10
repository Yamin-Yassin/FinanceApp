import {all} from 'redux-saga/effects';
import {watchFetchAccount} from './expenses/sagas';

function* rootSaga() {
  yield all([watchFetchAccount()]);
}

export default rootSaga;
