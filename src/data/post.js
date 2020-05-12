const Chance = require('chance');
export const post = [
  {
    id: 1,
    title: chance.name(),
    body: chance.sentence({ words: 10 })
  },
  {
    id: 2,
    title: chance.name(),
    body: chance.sentence({ words: 10 })
  },
  {
    id: 3,
    title: chance.name(),
    body: chance.sentence({ words: 10 })
  },
  {
    id: 4,
    title: chance.name(),
    body: chance.sentence({ words: 10 })
  },
  {
    id: 5,
    title: chance.name(),
    body: chance.sentence({ words: 10 })
  },
];
