import {all} from 'redux-saga/effects';
import {watchFetchUsers} from './expenses/sagas';

function* rootSaga() {
  yield all([watchFetchUsers()]);
}

export default rootSaga;
