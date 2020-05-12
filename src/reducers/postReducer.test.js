import { addPost, deletePost, updatePost } from '../actions/blogActions';
import reducer from './postReducer';
const Chance = require('chance');


describe('post reducer', () => {
  it('handles the ADD_POST action', () => {
    const state = []
    const action = addPost({
      id: 6,
      title: chance.name(),
      body: chance.string({ words: 10 }) 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        id: 6,
        title: expect.any(String),
        body: expect.any(String)
      }
    ]);
  });
});
