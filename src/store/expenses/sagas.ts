import * as API from '../../api';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actionUserType} from './types';

function* workFetchUsers() {
  console.log('workFetchUsers Started!');
  const users = yield call(API.fetchUsers);
  try {
    console.log('workFetchUsers Feched users', users);
    yield put({
      type: actionUserType.userSuccess,
      payload: {
        users: users,
      },
    });
  } catch (e) {
    console.error('workFetchUsers Failed', e);
    yield put({
      type: actionUserType.userSuccess,
      payload: {
        error: e,
      },
    });
  }
}

export function* watchFetchUsers() {
  console.log('watchFetchUsers');
  yield takeLatest(actionUserType.userRequest, workFetchUsers);
}
