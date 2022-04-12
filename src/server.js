const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.send('<h1> Hello Express </h1>');
});

// import routes
const numbersRoutes = require('./api/numbersRoutes');
// use routes
app.use('/api/numbers', numbersRoutes);

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
  console.log('foundPost ===', foundPost);
  if (foundPost === undefined) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }
  res.json(foundPost);
});

// GET /posts/withCategory - grazina posts masyva su papildoma savybe "category: tech"

// paleisti serveri
app.listen(PORT, () => console.log('Server is running on port', PORT));
