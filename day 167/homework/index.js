const express = require('express');
const app = express();
const port = 3000;


const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2022 },
  { id: 3, brand: 'Ford', model: 'Focus', year: 2018 },
  { id: 4, brand: 'Honda', model: 'Civic', year: 2019 },
  { id: 5, brand: 'Tesla', model: 'Model 3', year: 2021 }
];


app.get('/cars', (req, res) => {
  res.json(cars);
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
