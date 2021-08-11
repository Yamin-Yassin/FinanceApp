import {all} from 'redux-saga/effects';
import {watchFetchAccount, watchFetchTransaction} from './expenses/sagas';

function* rootSaga() {
  yield all([watchFetchAccount(), watchFetchTransaction()]);
}

export default rootSaga;
