import {createAsyncAction, createReducer} from 'typesafe-actions';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {getUsers} from '../api';
import {Account} from './types';

const fetchUsersAsync = createAsyncAction(
  'FETCH_USERS_REQUEST',
  'FETCH_USERS_SUCCESS',
  'FETCH_USERS_FAILURE',
)<string, Account[], string>();

function* addUserSaga(
  action: ReturnType<typeof fetchUsersAsync.request>,
): Generator {
  try {
    const response: any = yield call(getUsers, action.payload);

    yield put(fetchUsersAsync.success(response));
  } catch (err) {
    yield put(fetchUsersAsync.failure(err));
  }
}

function* mainSaga() {
  yield all([takeEvery(fetchUsersAsync.request, addUserSaga)]);
}
export default function* rootSaga() {
  yield all([mainSaga()]);
}

export const userReducer = createReducer({}).handleAction(
  fetchUsersAsync.success,
  (state: any, action: any) => ({...state, users: action.payload}),
);
