import {all, call, put, takeEvery} from 'redux-saga/effects';
import * as Api from '../api';

function* fetchUsers() {
  const users = yield call(Api.getUser, id);
  console.log(users);
  yield put({type: 'USERS_RECIEVED', users});
}

function* watchFetchUsers() {
  yield takeEvery('USERS_REQUESTED', fetchUsers);
}
