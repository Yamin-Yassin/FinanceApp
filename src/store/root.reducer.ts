import {combineReducers} from 'redux';
import {accountReducer, expenseReducer} from './expenses/reducers';

const reducers = combineReducers({
  account: accountReducer,

  transaction: expenseReducer,
});

export default reducers;

export type ReduxStateType = ReturnType<typeof reducers>;
