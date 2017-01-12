import * as types from '../constants/';

export const addTodo = (data) => {
  const obj = {
    id: Math.random().toString(36).substr(2, 9),
    text: data
  };

  return {
    type: types.ADD_TODO,
    payload: obj
  };
};

export const failure = (fail) => {
  return {
    type: types.FAIL
  };
};
