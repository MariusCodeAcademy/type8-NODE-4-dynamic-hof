const express = require('express');
const { posts } = require('../db/db');

const postRoutes = express.Router();

// routes
postRoutes.get('/', (request, response) => {
  response.json(posts);
});

// GET /posts/1 - grazina post objekta kurio id yra 1
postRoutes.get('/1', (req, res) => {
  const foundPost = posts.find((pObj) => pObj.id === 1);
  res.json(foundPost);
});

// GET /posts/:postId - grazina post objekta kurio id yra postId
// :postId - dinaminis route parametras. Ji gaunam is req.params.<pavadinimas>
// GET /api/posts/:postId/
postRoutes.get('/:postId', (req, res) => {
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

module.exports = postRoutes;
