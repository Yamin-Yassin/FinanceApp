import {combineReducers} from 'redux';
import usersReducer from './expenses/reducers';

export const rootReducers = combineReducers({users: usersReducer});
