import { createSelector } from 'reselect';

const searchFilter = (state) => state.todo.search;
const getTasks = (state) => state.todo.todos;

export const getFilteredTasks = createSelector(
  [ getTasks, searchFilter ],
  (state, filter) => {
    return state.filter(i => i.completed === true && i.name.toLowerCase().indexOf(filter) > -1);
  }
);
