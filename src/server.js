require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = +process.env.PORT || 5000;
// console.log(process.env);

// Middleware
app.use(cors());
app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.send(`<h1> Hello Express ${process.env.USER} </h1>`);
});

// import routes
const numbersRoutes = require('./api/numbersRoutes');
const postRoutes = require('./api/postsRoutes');
// use routes
app.use('/api/numbers', numbersRoutes);
app.use('/api/posts', postRoutes);

app.all('*', (req, res) => {
  res.status(404).json('Path not found');
});

// paleisti serveri
app.listen(PORT, () => console.log('Server is running on port', PORT));
