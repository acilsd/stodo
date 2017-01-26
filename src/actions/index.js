import * as types from '../constants/';

import {
  addTodo,
  searchTodo,
  filterDone,
  completeTodo,
  deleteTodo,
  editTodo,
  modalDelete,
  modalEdit,
  hideAllModals,
  failure
} from './actions-tasks';

import { addToFirebase, toggleFbStatus, fetchTasks } from './action-firebase';

export {
  addTodo,
  searchTodo,
  filterDone,
  completeTodo,
  deleteTodo,
  editTodo,
  modalDelete,
  modalEdit,
  hideAllModals,
  failure,
  addToFirebase,
  toggleFbStatus,
  fetchTasks
};
