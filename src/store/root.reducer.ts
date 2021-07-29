import {combineReducers} from 'redux';
import transactionReducer from './expenses/reducers';

const reducers = combineReducers({
  balance: transactionReducer,
});

export default reducers;
