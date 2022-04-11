const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];

const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is Post 1 body and it is all about Post 1',
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is Post 2 body and it is all about Post 2',
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is Post 3 body and it is all about Post 3',
  },
  {
    id: 4,
    title: 'ExpressJs',
    body: 'Express is easy way to make back end',
  },
];

function getNumbers() {
  return numbers;
}

function getPositiveNumbers() {
  return numbers.filter((nr) => nr > 0);
}

function getNumbersGreaterThan(x) {}

function getPostById(id) {}

function getPostByTitle(title) {}

module.exports = {
  numbers,
  posts,
};
