/*eslint no-console: off*/
import * as types from '../constants/';
import { fbRef } from '../firebase';

import {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo
} from './actions-tasks';

export const fetchTasks = () => {
  return (dispatch) => {
    const dataRef = fbRef.child('tasks');
    dispatch({
      type: types.LOADING
    });
    return dataRef.once('value').then((res) => {
      const raw = res.val() || {};
      const parsed = Object.keys(raw).map((id) => {
        return {id, ...raw[id]};
      });
      dispatch({
        type: types.FETCH_TODOS,
        payload: parsed
      });
    }), err => console.error(err);
  };
};

export const addToFirebase = (data) => {
  return (dispatch) => {
    const newTask = {
      name: data.name,
      text: data.text,
      time: data.time,
      note: data.note,
      completed: false
    };
    const taskRef = fbRef.child('tasks').push(newTask);
    return taskRef.then(() => {
      dispatch(addTodo({
        ...newTask,
        id: taskRef.key
      }));
    }), err => console.error(err);
  };
};

export const editInFirebase = (data) => {
  return (dispatch) => {
    const taskRef = fbRef.child('tasks');
    return taskRef.then(() => {
      dispatch(editTodo({
        id: taskRef.key
      }));
    }), err => console.error(err);
  };
};

export const deleteFromFirebase = (data) => {
  return (dispatch) => {
    const taskRef = fbRef.child('tasks');
    return taskRef.then(() => {
      dispatch(deleteTodo({
        id: taskRef.key
      }));
    }), err => console.error(err);
  };
};

export const toggleFbStatus = (id, status) => {
  return (dispatch) => {
    const taskRef = fbRef.child(`tasks/${id}`);
    const updates = { completed: status };
    return taskRef.update(updates).then(() => {
      dispatch(completeTodo(id, status));
    }), err => console.error(err);
  };
};
