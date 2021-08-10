import {actionUserType} from './types';

const initState = {
  id: '9f7b5b90-8f9d-4ace-b05e-6022b4b75bd3',
  name: 'Yamin',
  initialValue: 100,
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

const accountReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionUserType.userRequest:
      console.log('ACCOUNT REDUCER', actionUserType.userRequest);
      return {
        ...state,
        loading: true,
      };
    case actionUserType.userSuccess:
      const users = action.payload.users;

      console.log('ACCOUNT REDUCER', actionUserType.userSuccess);

      const newState = {
        ...state,
        id: users.id,
        name: users.name,
        initialValue: users.initialValue,
        transactions: [...state.transactions, users.transactions],
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
