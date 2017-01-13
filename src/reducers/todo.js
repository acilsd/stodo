import {
  ADD_TODO,
  FILTER_TODO,
  SEARCH_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from '../constants/';

const initialState = {
  filtered: false,
  todos: [
    {
      id: 'asfawf',
      text: 'Sasai',
      completed: true
    },
    {
      id: 'ghghgha',
      text: 'Kudasai',
      completed: true
    },
  ]
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_TODO:
    return {...state, todos: [...state.todos, action.payload]};
  case FILTER_TODO:
    return state;
  case SEARCH_TODO:
    return state;
  case DELETE_TODO:
    return state;
  case COMPLETE_TODO:
    return {...state, todos: toggle(state.todos, action.payload)};
  default:
    return state;
  }
}

const toggle = (state, data) => {
  const { id, completed } = data;
  const newState = state.map((item) => {
    if (item.id === id) {
      item.completed = completed;
    }
    return item;
  });
  return newState;
};
