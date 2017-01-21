import {
  ADD_TODO,
  FILTER_TODO,
  SEARCH_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO
} from '../constants/';

const initialState = {
  filtered: false,
  search: '',
  todos: [
    {
      id: 'afawg',
      name: 'test',
      text: 'sasai',
      time: '12.12.1999',
      note: 'kudasai',
      completed: false
    },
    {
      id: 'ahgjjhju',
      name: 'test2',
      text: 'sasai2',
      time: '12.12.1999',
      note: 'kudasai',
      completed: false
    },
    {
      id: 'afaegagawg',
      name: 'test3',
      text: 'sasai3',
      time: '12.12.1999',
      note: 'kudasai',
      completed: false
    }
  ]
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_TODO:
    return {...state, todos: [...state.todos, action.payload]};
  case FILTER_TODO:
    return {...state, filtered: action.payload};
  case SEARCH_TODO:
    return {...state, search: action.payload};
  case COMPLETE_TODO:
    return {...state, todos: toggle(state.todos, action.payload)};
  case DELETE_TODO:
    return {...state, todos: deleteFromState(state.todos, action.payload)};
  case EDIT_TODO:
    return {...state, todos: editTodo(state.todos, action.payload)};
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

const deleteFromState = (state, id) => {
  const newState = state.filter((item) => {
    return item.id !== id;
  });
  return newState;
};

const editTodo = (state, obj) => {
  const newState = state.map((item) => {
    if (item.id === obj.id) item = obj;
    return item;
  });
  return newState;
};
