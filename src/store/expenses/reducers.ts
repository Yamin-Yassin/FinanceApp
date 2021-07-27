import {combineReducers} from 'redux';

const initialState = {balance: 0};

const transactionReducer = (action: any, state = initialState) => {
  if (action.type === 'transaction') {
    return {
      ...state,
      balance: state.balance + action.payload,
    };
  }

  return state;
};

const reducers = combineReducers({
  balance: transactionReducer,
});

export default reducers;
