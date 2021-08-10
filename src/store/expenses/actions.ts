import {
  Transaction,
  actionTransactionType,
  TransactionType,
  actionUsersType,
} from './types';
import {createAction} from 'typesafe-actions';
//import {Dispatch} from 'redux';
/* export const addTransaction = (
  name: string,
  date: string,
  description: string,
  value: number,
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.Add,
      payload: {
        name,
        date,
        description,
        value,
      },
    });
  };
};

export const removeTransaction = (
  name: string,
  date: string,
  description: string,
  value: number,
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.Remove,
      payload: {
        name,
        date,
        description,
        value,
      },
    });
  };
};

export const addTransaction = createAction(
  ActionEnum.Add,
  (name: string, date: string, description: string, value: number) => ({
    name,
    date,
    description,
    value,
  }),
)<ActionPayload>();

export const removeTransaction = createAction(
  ActionEnum.Remove,
  (name: string, date: string, description: string, value: number) => ({
    name,
    date,
    description,
    value,
  }),
)<ActionPayload>();
 */

const transactionfunc = (
  id: string | null,
  transactionType: TransactionType,
  name: string | null,
  value: number,
  createdDate: string,
) => ({
  id,
  transactionType,
  name,
  value,
  createdDate,
});

export const expenseTransaction = createAction(
  actionTransactionType.ExpenseRequest,
  transactionfunc,
)<Transaction>();

export const incomeTransaction = createAction(
  actionTransactionType.IncomeRequest,
  transactionfunc,
)<Transaction>();

export const getUsers = createAction(actionUsersType.Request);

// export const getUser = createAction(
//   actionUserType.userRequest,
//   (id: string | null) => ({
//     id,
//   }),
// );
