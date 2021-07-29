import {combineReducers, createStore} from 'redux';
import transactionReducer from './expenses/reducers';

const reducers = combineReducers({
  balance: transactionReducer,
});

export const store = createStore(reducers, {});
