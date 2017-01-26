import * as types from '../constants/';

import firebase, { fbRef } from '../firebase';

import {
  addTodo,
  completeTodo,
  deleteTodo
} from './actions-tasks';

export const fetchTasks = () => {
  return (dispatch) => {
    const dataRef = fbRef.child('tasks');
    return dataRef.once('value').then((res) => {
      const raw = res.val() || {};
      let parsed = [];
      Object.keys(raw).map((id) => {
        parsed.push({ id, ...raw[id] }); //thats not good, goin to change is asap
      });
      dispatch({
        type: types.FETCH_TODOS,
        payload: parsed
      });
    });
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
    });
  };
};

export const toggleFbStatus = (id, status) => {
  return (dispatch) => {
    const taskRef = fbRef.child(`tasks/${id}`);
    const updates = { completed: status };
    return taskRef.update(updates).then(() => {
      dispatch(completeTodo(id, status));
    });
  };
};
