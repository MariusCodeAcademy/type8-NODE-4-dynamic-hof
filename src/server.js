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

// GET /numbers - grazina numbers masyva json formatu is db.js
const { numbers } = require('./db/db');

// GET /numbers/positives - grazina numbers masyva json formatu is db.js su tik teigiamais skaiciais

// GET /numbers/obj-values - grazinam masyva kuris turi objektus {value: 1}, {value: 12}
app.get('/numbers/obj-values', (req, res) => {
  const numbObjs = numbers.map((sk) => {
    return {
      value: sk,
    };
  });
  console.log('numbObjs ===', numbObjs);
  res.json(numbObjs);
});

// GET /numbers/max - grazina didziausia reiksme objekto pavidalu {max: 500}
app.get('/numbers/max', (req, res) => {
  const max = numbers.reduce((maxNum, sk) => Math.max(maxNum, sk));
  res.json({ maxIs: max });
});

// GET /numbers/separate - su reduce
// {
//   positives: [];
//   negatives: [];
// }

// GET /numbers/gt/10 - grazina masyva kuriame yra sk didesni uz 10

// GET /numbers/gt/:num - grazina masyva kuriame yra sk didesni uz num
app.get('/numbers/gt/:num', (req, res) => {
  // pasiimti num
  const num = +req.params.num;
  const skDaugiauUzNum = numbers.filter((sk) => sk > num);
  res.json(skDaugiauUzNum);
});

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
