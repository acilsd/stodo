import { ADD_TODO, FILTER_TODO, SEARCH_TODO } from '../constants/';

const initialState = {
  filtered: false,
  todos: [
    {
      id: 'asfawf',
      text: 'Sasai'
    },
    {
      id: 'ghghgha',
      text: 'Kudasai'
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
  default:
    return state;
  }
}
