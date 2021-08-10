import * as API from '../../api';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actionAccountType, actionUsersType} from './types';

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

// ------------------ ACCOUNT SAGA

function* workFetchAccount(action: any) {
  console.log('workFetchAccount Started!', action);
  const account = yield call(API.fetchAccount, action.payload.id);
  try {
    console.log('workFetchAccount SUCCESS');
    yield put({
      type: actionAccountType.Success,
      payload: account,
    });
  } catch (e) {
    console.error('workFetchUsers FAILED', e);
    yield put({
      type: actionAccountType.Success,
      payload: {
        error: e,
      },
    });
  }
}
export function* watchFetchAccount() {
  console.log('watchFetchAccout');
  yield takeLatest(actionAccountType.Request, workFetchAccount);
}
