export enum TransactionType {
  Income = 'INCOME',
  Expense = 'EXPENSE',
}

export type Transaction = {
  id: string | null;
  transactionType: TransactionType | string;
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
