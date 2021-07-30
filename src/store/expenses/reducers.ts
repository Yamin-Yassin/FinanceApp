import {Action, ActionEnum} from './types';

const initState = {
  name: 'Yamin Yassin',
  avatar: require('../../assets/avatar.jpeg'),
  balance: 1000,
  transactions: [],
};

const transactionReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionEnum.Add:
      return {
        ...state,
        balance: state.balance + action.payload.value,
        transactions: [...state.transactions, action.payload],
      };
    case ActionEnum.Remove:
      return {
        ...state,
        balance: state.balance - action.payload.value,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default transactionReducer;
