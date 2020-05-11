import { ADD_POST, addPost, deletePost, UPDATE_POST, updatePost } from './blogActions';
var Chance = require('chance');

describe('blog actions', () => {
  it('creats an ADD_POST action', () => {
    const action = addPost({
      title: chance.name(),
      body: chance.sentence({ words: 10 })
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: expect.any(String),
        body: expect.any(String)
      }
    });
  });
});

describe('blog actions', () => {
  it('creats an ADD_POST action', () => {
    const action = addPost({
      id: 1,
      title: 'Deckard Cain',
      body: 'Stay a while and listen.'
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        id: 1,
        title: 'Deckard Cain',
        body: 'Stay a while and listen.'
      }
    });
  });
});

it('creates an action to delete a post', () => {
  const action = deletePost({ id: 1 });

  expect(action).toEqual({
    type: 'DELETE_POST',
    payload: { id: 1 }
  });
});

it('creates an action that updates a post by passing an id and new body', () => {
  const action = updatePost({
    type: UPDATE_POST,
    payload: {
      id: 2,
      body: chance.sentence({ words: 10 })
    }

  });
});
