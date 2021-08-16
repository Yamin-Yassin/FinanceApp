import {combineReducers} from 'redux';
import {accountReducer} from './expenses/reducers';

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;

export type ReduxStateType = ReturnType<typeof reducers>;
