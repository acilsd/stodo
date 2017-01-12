import * as types from '../constants/';
//FILTER_TODO
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

export const searchTodo = (data) => {
  return {
    type: types.FILTER_TODO,
    payload: data
  };
};

export const failure = (fail) => {
  return {
    type: types.FAIL
  };
};
