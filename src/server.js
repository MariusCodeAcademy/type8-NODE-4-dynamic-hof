const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send('<h1> Hello Express </h1>');
});

// GET /numbers - grazina numbers masyva json formatu is db.js
const { numbers } = require('./db/db');
app.get('/numbers', (request, response) => {
  console.log('numbers ===', numbers);
  response.json(numbers);
});

// GET /numbers/positives - grazina numbers masyva json formatu is db.js su tik teigiamais skaiciais
app.get('/numbers/positives', (request, response) => {
  // numbers gauti tik teigiamus ir grazinti
  const positives = numbers.filter((sk) => sk > 0);
  response.json(positives);
  // response.json(numbers.filter((sk) => sk > 0));
});

// GET /numbers/max - grazina didziausia reiksme objekto pavidalu {max: 500}

// GET /numbers/gt/10 - grazina masyva kuriame yra sk didesni uz 10

// GET /posts - grazina posts masyva json formatu is db.js
const { posts } = require('./db/db');
app.get('/posts', (request, response) => {
  //
  response.json(posts);
});

// GET /posts/1 - grazina post objekta kurio id yra 1
app.get('/posts/1', (req, res) => {
  const foundPost = posts.find((pObj) => pObj.id === 1);
  res.json(foundPost);
});

// GET /posts/:postId - grazina post objekta kurio id yra postId
// :postId - dinaminis route parametras. Ji gaunam is req.params.<pavadinimas>
app.get('/posts/:postId', (req, res) => {
  // console.log('req.params.postId', req.params.postId);
  const postId = +req.params.postId;
  console.log('postId ===', postId);
  const foundPost = posts.find((pObj) => pObj.id === postId);
  res.json(foundPost);
});

// GET /posts/withCategory - grazina posts masyva su papildoma savybe "category: tech"

// paleisti serveri
app.listen(PORT, () => console.log('Server is running on port', PORT));
