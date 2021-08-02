export enum ActionEnum {
  Add = 'add',
  Remove = 'remove',
}

export type ActionPayload = {
  name: string;
  date: string;
  description: string;
  value: number;
};

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
export type Action = AddAction | RemoveAction;

export type TransactionType = {
  id: number;
  name: string;
  date: string;
  description: string;
  value: number;
};
