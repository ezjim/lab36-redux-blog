import post from '../data/post';
import { ADD_POST, DELETE_POST, UPADTE_POST, UPDATE_POST } from '../actions/blogActions';

const initialState = [{

}];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
    case UPDATE_POST:
      return state.map((post, i) => {
        if(i === action.payload.index) return action.payload.post;
        return post;
      });
  }
}
