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


app.get('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const car = cars.find(c => c.id === id);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
