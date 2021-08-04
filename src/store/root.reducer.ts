import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import transactionReducer from './expenses/reducers';

const reducers = combineReducers({
  balance: transactionReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

export type ReduxStateType = ReturnType<typeof reducers>;
