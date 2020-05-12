import { addPost, deletePost, updatePost } from '../actions/blogActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('handles the ADD_POST action', () => {
    const state = [];
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
  /////////////////////////////////////////////////////
  it('handles the UPDATE_POST action', () => {
    const state = [{
      id: 7,
      title: 'Arreats Bravest',
      body: 'D2 was possibly the best game ever made.'
    }];

    const action = updatePost(0, {
      id: 7,
      title: 'Arreats Bravest',
      body: 'D2 was possibly the best game ever made.'
    });

    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        id: 7,
        title: 'Arreats Bravest',
        body: 'D2 was possibly the best game ever made.'
      }
    ]);
  });

  //////////////////////////////////////////////////////
  it('handles the DELETE_POST action', () => {
    const state = [{
      id: 7,
      title: 'Arreats Bravest',
      body: 'D2 was possibly the best game ever made.'
    }];
    const action = deletePost(0);
    const newState = reducer(state, action);
    expect(newState).toEqual([]);
  });
});
