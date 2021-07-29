import {Action, ActionEnum} from './types';
import {Dispatch} from 'redux';

export const addTransaction = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.Add,
      payload: value,
    });
  };
};

export const removeTransaction = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.Remove,
      payload: value,
    });
  };
};
