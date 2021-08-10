import {actionAccountType, actionUsersType} from './types';

const initState = {
  id: null,
  name: null,
  initialValue: 0,
  transactions: [
    {
      createDate: '2021-02-22T17:54:05.8534634+00:00',
      id: '9999',
      name: 'uberrr',
      transactionType: 'Income',
      value: 10,
    },
  ],
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
        transactions: [...state.transactions, action.payload.transactions],
        loading: false,
        error: false,
      };

    case actionAccountType.Fail:
      console.log('ACCOUNT REDUCER', actionAccountType.Fail);

      return {
        ...state,
        error: true,
      };

    default:
      return {...state};
  }
};

export const usersReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionUsersType.Request:
      console.log('USERS REDUCER', actionUsersType.Request);
      return {
        ...state,
        loading: true,
      };
    case actionUsersType.Success:
      console.log('USERS REDUCER', actionUsersType.Success);

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

    case actionUsersType.Fail:
      console.log('USERS REDUCER', actionUsersType.Fail);

      return {
        ...state,
        error: true,
      };
    default:
      return {...state};
  }
};
