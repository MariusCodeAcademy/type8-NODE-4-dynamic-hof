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

numbersRoutes.get('/obj-values', (req, res) => {
  const numbObjs = numbers.map((sk) => ({ value: sk }));
  console.log('numbObjs ===', numbObjs);
  res.json(numbObjs);
});

numbersRoutes.get('/max', (req, res) => {
  const max = numbers.reduce((maxNum, sk) => Math.max(maxNum, sk));
  res.json({ maxIs: max });
});

numbersRoutes.get('/gt/:num', (req, res) => {
  const num = +req.params.num;
  const skDaugiauUzNum = numbers.filter((sk) => sk > num);
  res.json(skDaugiauUzNum);
});

// default export
module.exports = numbersRoutes;
