export enum TransactionType {
  Income = 'Income',
  Expense = 'Expense',
}

export type Transaction = {
  id: string | null;
  transactionType: TransactionType;
  name: string | null;
  value: number;
  createdDate: string;
};

export type Account = {
  id: string | null;
  name: string | null;
  initialValue: number;
  transactions: Transaction[];
};

export enum actionAccountType {
  Request = 'ACCOUNT_REQUEST',
  Success = 'ACCOUNT_SUCCESS',
  Fail = 'ACCOUNT_FAILED',
}

export enum actionExpenseType {
  Request = 'EXPENSE_REQUEST',
  Success = 'EXPENSE_SUCCESS',
  Fail = 'EXPENSE_FAILED',
}

export enum actionIncomeType {
  Request = 'INCOME_REQUEST',
  Success = 'INCOME_SUCCESS',
  Fail = 'INCOME_FAILED',
}
