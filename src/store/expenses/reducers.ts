import {ActionType, getType} from 'typesafe-actions';
import * as transactionActions from './actions';

const initState = {
  name: 'Yamin Yassin',
  avatar: require('../../assets/avatar.jpeg'),
  balance: 1000,
  transactions: [],
};

const transactionReducer = (
  state = initState,
  action: ActionType<typeof transactionActions>,
) => {
  switch (action.type) {
    case getType(transactionActions.addTransaction):
      return {
        ...state,
        balance: state.balance + action.payload.value,
        transactions: [...state.transactions, action.payload],
      };
    case getType(transactionActions.removeTransaction):
      return {
        ...state,
        balance: state.balance - action.payload.value,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

/* const transactionReducer = createReducer(initState).handleAction(
  ActionEnum.Add, (state, action) => {
    state,
    balance: state.balance + action.payload.value,
    transactions: [...state.transactions, action.payload],
  };
); */

export default transactionReducer;
