import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga, {userReducer} from './expenses/sagas';

const SagaMiddleware = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);
