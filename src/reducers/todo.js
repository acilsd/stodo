import { ADD_TODO } from '../constants/';

const initialState = [
  {
    id: 'asfawf',
    text: 'Sasai'
  },
  {
    id: 'ghghgha',
    text: 'Kudasai'
  },
];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.payload];
  default:
    return state;
  }
}
