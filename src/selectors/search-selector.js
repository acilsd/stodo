import { createSelector } from 'reselect';

const taskSelector = state => state.todo.todos;
const searchSelector = state => state.todo.search;

const searchTasks = (state, filter) => {
  const selectedTasks = state.filter((i) => i.name.toLowerCase().indexOf(filter) > -1);
  return selectedTasks;
};

export default createSelector(
  taskSelector,
  searchSelector,
  searchTasks
);
