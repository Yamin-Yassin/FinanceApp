import {Action, ActionEnum, ActionPayload} from './types';
import {Dispatch} from 'redux';
import {createAction} from 'typesafe-actions';

/* export const addTransaction = (
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
 */

export const addTransaction = createAction(
  ActionEnum.Add,
  (name: string, date: string, description: string, value: number) => ({
    name,
    date,
    description,
    value,
  }),
)<ActionPayload>();

export const removeTransaction = createAction(
  ActionEnum.Remove,
  (name: string, date: string, description: string, value: number) => ({
    name,
    date,
    description,
    value,
  }),
)<ActionPayload>();
