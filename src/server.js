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
const postRoutes = require('./api/postsRoutes');
// use routes
app.use('/api/numbers', numbersRoutes);
app.use('/api/posts', postRoutes);

// GET /posts/withCategory - grazina posts masyva su papildoma savybe "category: tech"

// paleisti serveri
app.listen(PORT, () => console.log('Server is running on port', PORT));
