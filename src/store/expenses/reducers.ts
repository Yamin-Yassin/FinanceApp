import {actionAccountType, actionExpenseType} from './types';

const initState = {
  id: null,
  name: null,
  initialValue: 0,
  transactions: [],
  loading: false,
  error: false,
};

export const accountReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionAccountType.Request:
      console.log('ACCOUNT REDUCER', actionAccountType.Request);

      return {
        ...state,
        loading: true,
      };

    case actionAccountType.Success:
      console.log('ACCOUNT REDUCER', actionAccountType.Success);

      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        initialValue: action.payload.initialValue,
        transactions: action.payload.transactions.reverse(),
        loading: false,
        error: false,
      };

    case actionAccountType.Fail:
      console.log('ACCOUNT REDUCER', actionAccountType.Fail);

      return {
        ...state,
        error: true,
      };

    case actionExpenseType.Request:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionExpenseType.Success:
      return {
        ...state,
        balance: state.initialValue - action.payload.value,
        transactions: [...state.transactions, action.payload],
        loading: false,
        error: false,
      };

    case actionExpenseType.Fail:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return {...state};
  }
};
