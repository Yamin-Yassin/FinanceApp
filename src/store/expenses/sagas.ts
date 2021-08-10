import * as API from '../../api';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actionUsersType} from './types';

function* workFetchUsers() {
  console.log('workFetchUsers Started!');
  const users = yield call(API.fetchUsers);
  try {
    console.log('workFetchUsers Feched users', users);
    yield put({
      type: actionUsersType.Success,
      payload: {
        users: users,
      },
    });
  } catch (e) {
    console.error('workFetchUsers Failed', e);
    yield put({
      type: actionUsersType.Success,
      payload: {
        error: e,
      },
    });
  }
}

export function* watchFetchUsers() {
  console.log('watchFetchUsers');
  yield takeLatest(actionUsersType.Request, workFetchUsers);
}
