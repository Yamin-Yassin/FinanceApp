import {Action, ActionEnum} from './types';

const initState = {
  balance: 1000,
};

/* export enum ActionEnum {
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

export type Action = AddAction | RemoveAction; */

const transactionReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionEnum.Add:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case ActionEnum.Remove:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
