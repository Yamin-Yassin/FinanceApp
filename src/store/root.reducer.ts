import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import transactionReducer from './expenses/reducers';

const reducers = combineReducers({
  balance: transactionReducer,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export type ReduxStateType = ReturnType<typeof reducers>;
