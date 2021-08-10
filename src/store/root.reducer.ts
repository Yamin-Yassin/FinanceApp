import {combineReducers} from 'redux';
import {accountReducer, usersReducer} from './expenses/reducers';

const reducers = combineReducers({
  account: accountReducer,
  users: usersReducer,
});

export default reducers;

export type ReduxStateType = ReturnType<typeof reducers>;
