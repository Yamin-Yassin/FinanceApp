import {createStore} from 'redux';
import reducers from './expenses/reducers';

export const store = createStore(reducers, {});
