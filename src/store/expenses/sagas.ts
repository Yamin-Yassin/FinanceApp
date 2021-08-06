import {call, put, takeLatest} from 'redux-saga/effects';
import * as Api from '../api';

function* workerfetchUsers(): any {
  try {
    const users = yield call(Api.getUsers);
    console.log('workerFetchUsers ', users);

    yield put({type: 'USERS_SUCCESS', users});
  } catch (error) {
    console.log('workerFetchUsers ', error);
    yield put({type: 'USERS_FAILURE', error});
  }
}

export function* watcherFetchUsers(): any {
  yield takeLatest('USERS_REQUEST', workerfetchUsers);
}
