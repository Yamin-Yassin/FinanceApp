import {actionUserType} from './types';

const initState = {
  id: null,
  name: null,
  initialValue: 100,
  transactions: [],
  loading: false,
  error: false,
};

/* const transactionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionUserType.userRequest:
      return {
        ...state,
        balance: state.initialValue + action.payload.value,
        transactions: [...state.transactions, action.payload],
      };
    case getType(transactionActions.removeTransaction):
      return {
        ...state,
        balance: state.initialValue - action.payload.value,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
}; */

const accountReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionUserType.userRequest:
      console.log('ACCOUNT REDUCER', actionUserType.userRequest);
      return {
        ...state,
        loading: true,
      };
    case actionUserType.userSuccess:
      console.log('ACCOUNT REDUCER', actionUserType.userSuccess);

      const newState = {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        initialValue: action.payload.initialValue,
        transactions: [...state.transactions, action.payload.transactions],
        loading: false,
        error: false,
      };
      console.log(newState);
      return newState;

    case actionUserType.userFail:
      console.log('ACCOUNT REDUCER', actionUserType.userFail);

      return {
        ...state,
        error: true,
      };
    default:
      return {...state};
  }
};

export default accountReducer;
