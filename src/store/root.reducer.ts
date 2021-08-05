import {combineReducers} from 'redux';

export const rootReducers = combineReducers({
  value: transactionReducers,
});
