const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let cars = [
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


app.delete('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex(c => c.id === id);

  if (index !== -1) {
    const deleted = cars.splice(index, 1)[0];
    res.status(200).json(deleted);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});


app.post('/cars', (req, res) => {
  const { brand, model, year } = req.body;


  const newId = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1;
  const newCar = { id: newId, brand, model, year };

  cars.push(newCar);
  res.status(201).json(newCar);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
