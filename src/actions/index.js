import * as types from '../constants/';
import { generateId } from '../utils';

export const addTodo = (data) => ({ type: types.ADD_TODO, payload: {id: generateId(), text: data, completed: false} });

export const searchTodo = (data) => ({ type: types.SEARCH_TODO, payload: data });

export const filterDone = (status) => ({ type: types.FILTER_TODO, payload: status });

export const completeTodo = (id, status) => ({ type: types.COMPLETE_TODO, payload: {id, completed: status} });

export const deleteTodo = (id) => ({type: types.DELETE_TODO, payload: id});

export const failure = (fail) => ({ type: types.FAIL });
