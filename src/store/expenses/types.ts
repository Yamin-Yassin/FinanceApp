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

export enum actionUsersType {
  Request = 'USERS_REQUEST',
  Success = 'USERS_SUCCESS',
  Fail = 'USERS_FAILED',
}

export enum actionAccountType {
  Request = 'ACCOUNT_REQUEST',
  Success = 'ACCOUNT_SUCCESS',
  Fail = 'ACCOUNT_FAILED',
}

export enum actionTransactionType {
  ExpenseRequest = 'EXPENSE_REQUEST',
  ExpenseSuccess = 'EXPENSE_SUCCESS',
  ExpenseFailed = 'EXPENSE_FAILED',
  IncomeRequest = 'INCOME_REQUEST',
  IncomeSuccess = 'INCOME_SUCCESS',
  IncomeFailed = 'INCOME_FAILED',
}
