const express = require('express');
const { numbers } = require('../db/db');
// sukuriam routerio objekta
const numbersRoutes = express.Router();

// Routes
numbersRoutes.get('/', (request, response) => {
  console.log('numbers ===', numbers);
  response.json(numbers);
});

numbersRoutes.get('/positives', (request, response) => {
  // numbers gauti tik teigiamus ir grazinti
  const positives = numbers.filter((sk) => sk > 0);
  response.json(positives);
  // response.json(numbers.filter((sk) => sk > 0));
});

// default export
module.exports = numbersRoutes;
