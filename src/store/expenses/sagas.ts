import * as API from '../../api';
import {call, put, takeLatest} from 'redux-saga/effects';
import {actionAccountType, actionExpenseType} from './types';

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
    console.error('workFetchAccount FAILED', e);
    yield put({
      type: actionAccountType.Fail,
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

// ---------------- TRANSACTION SAGA

function* workFetchTransaction(action: any) {
  console.log('workFetchTransaction Started!', action);

  const transaction = yield call(
    API.postTransactions,
    action.payload.id,
    action.payload.name,
    action.payload.value,
  );
  try {
    console.log('workFetchTransaction SUCCESS');
    yield put({
      type: actionExpenseType.Success,
      payload: transaction,
    });
  } catch (e) {
    console.error('workFetchTransaction FAILED', e);
    yield put({
      type: actionExpenseType.Success,
      payload: {
        error: e,
      },
    });
  }
}
export function* watchFetchTransaction() {
  console.log('watchFetchTransaction');
  yield takeLatest(actionExpenseType.Request, workFetchTransaction);
}
