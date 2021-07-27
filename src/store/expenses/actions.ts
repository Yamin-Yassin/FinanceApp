import {createAction} from 'typesafe-actions';

export const addTransaction = createAction('add', action => {
  return (value: string) => action(value);
});
