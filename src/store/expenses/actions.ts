import {createAction} from 'typesafe-actions';

export const addBalance = createAction('ADD', action => {
  return (value: string) => action(value);
});

export const removeBalance = createAction('REMOVE', action => {
  return (value: string) => action(value);
});
