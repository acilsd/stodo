import * as types from '../constants/';

export const addTodo = (data) => {
  const obj = {
    id: Math.random().toString(36).substr(2, 9),
    text: data,
    completed: false
  };
  return {
    type: types.ADD_TODO,
    payload: obj
  };
};

export const searchTodo = (data) => {
  return {
    type: types.SEARCH_TODO,
    payload: data
  };
};

export const filterDone = () => {
  return {
    type: types.FILTER_TODO,
  };
};

export const completeTodo = (id, status) => {
  const obj = {
    id: id,
    completed: status
  };
  return {
    type: types.COMPLETE_TODO,
    payload: obj    
  };
};

export const failure = (fail) => {
  return {
    type: types.FAIL
  };
};
