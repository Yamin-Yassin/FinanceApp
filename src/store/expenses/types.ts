export enum ActionEnum {
  Add = 'add',
  Remove = 'remove',
}

interface AddAction {
  type: ActionEnum.Add;
  payload: {
    name: string;
    date: string;
    description: string;
    value: number;
  };
}

interface RemoveAction {
  type: ActionEnum.Remove;
  payload: {
    name: string;
    date: string;
    description: string;
    value: number;
  };
}

export type TransactionType = {
  id: number;
  name: string;
  date: string;
  description: string;
  value: number;
};
export type Action = AddAction | RemoveAction;
