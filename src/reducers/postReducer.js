import post from '../data/post';
import { ADD_POST, DELETE_POST, UPADTE_POST } from '../actions/blogActions';

const initialState = [{

}];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
  }
}
