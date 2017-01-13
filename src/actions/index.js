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

export const searchTodo = (data) => ({type: types.SEARCH_TODO, payload: data});

export const filterDone = (status) => ({type: types.FILTER_TODO, payload: status});

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

export const deleteTodo = (id) => ({type: types.DELETE_TODO, payload: id});

export const failure = (fail) => ({ type: types.FAIL });
