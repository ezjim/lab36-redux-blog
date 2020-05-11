import { ADD_BLOG, addBlog } from './blogActions';
var Chance = require('chance');

describe('blog actions', () => {
  it('creats an ADD_BLOG action', () => {
    const action = addBlog({
      title: chance.name(),
      body: chance.sentence({ words: 10 })
    });

    expect(action).toEqual({
      type: ADD_BLOG,
      payload: {
        title: expect.any(String),
        body: expect.any(String)
      }
    });
  });
});

describe('blog actions', () => {
  it('creats an ADD_BLOG action', () => {
    const action = addBlog({
      title: 'Deckard Cain',
      body: 'Stay a while and listen.'
    });

    expect(action).toEqual({
      type: ADD_BLOG,
      payload: {
        title: 'Deckard Cain',
        body: 'Stay a while and listen.'
      }
    });
  });
});
