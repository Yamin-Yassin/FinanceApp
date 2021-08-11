import {
  Transaction,
  actionExpenseType,
  TransactionType,
  actionUsersType,
  actionAccountType,
  actionIncomeType,
} from './types';
import {createAction} from 'typesafe-actions';

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
  actionExpenseType.Request,
  transactionfunc,
)<Transaction>();

export const incomeTransaction = createAction(
  actionIncomeType.Request,
  transactionfunc,
)<Transaction>();

export const getUsers = createAction(actionUsersType.Request);

export const getAccount = createAction(
  actionAccountType.Request,
  (id: string | null) => ({
    id,
  }),
);
