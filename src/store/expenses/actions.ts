import {Action, ActionEnum} from './types';
import {Dispatch} from 'redux';

export const addTransaction = (
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
