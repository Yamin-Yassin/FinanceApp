export enum ActionEnum {
  Add = 'add',
  Remove = 'remove',
}

interface AddAction {
  type: ActionEnum.Add;
  payload: number;
}

interface RemoveAction {
  type: ActionEnum.Remove;
  payload: number;
}

export type Action = AddAction | RemoveAction;
