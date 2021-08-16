import {
  Transaction,
  actionExpenseType,
  TransactionType,
  actionAccountType,
  actionIncomeType,
} from './types';
import {createAction} from 'typesafe-actions';

const transactionfunc = (
  id: string | null,
  name: string | null,
  value: number,
) => ({
  id,
  name,
  value,
});

export const expenseTransaction = createAction(
  actionExpenseType.Request,
  transactionfunc,
)<Transaction>();

export const incomeTransaction = createAction(
  actionIncomeType.Request,
  transactionfunc,
)<Transaction>();

export const getAccount = createAction(
  actionAccountType.Request,
  (id: string | null) => ({
    id,
  }),
);
