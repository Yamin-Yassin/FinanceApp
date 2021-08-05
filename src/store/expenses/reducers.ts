import {Account, TransactionType} from './types';

const initialState: Account = {
  id: null,
  name: 'yamin',
  initialValue: 1000,
  transactions: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TransactionType.Expense:
      return {
        ...state,
        initialValue: state.initialValue - action.payload.transaction.value,
        transactions: [...state.transactions, action.payload.transaction],
      };
    case TransactionType.Income:
      return {
        ...state,
        initialValue: state.initialValue + action.payload.transaction.value,
        transactions: [...state.transactions, action.payload.transaction],
      };
    default:
      return state;
  }
};

export default transactionReducer;
