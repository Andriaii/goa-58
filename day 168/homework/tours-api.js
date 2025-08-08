const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tours = [
  { id: 1, title: 'Tbilisi City Tour', price: 50 },
  { id: 2, title: 'Kazbegi Adventure', price: 120 },
  { id: 3, title: 'Batumi Beach Trip', price: 80 }
];

app.get('/tours', (req, res) => {
  res.json(tours);
});

app.get('/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find(t => t.id === id);
  if (tour) res.json(tour);
  else res.status(404).json({ error: 'Tour not found' });
});

app.post('/tours', (req, res) => {
  const { title, price } = req.body;
  const newId = tours.length ? tours[tours.length - 1].id + 1 : 1;
  const newTour = { id: newId, title, price };
  tours.push(newTour);
  res.status(201).json(newTour);
});

app.put('/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tours.findIndex(t => t.id === id);
  if (index !== -1) {
    const { title, price } = req.body;
    tours[index] = { ...tours[index], title, price };
    res.json(tours[index]);
  } else {
    res.status(404).json({ error: 'Tour not found' });
  }
});

app.delete('/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tours.findIndex(t => t.id === id);
  if (index !== -1) {
    const deleted = tours.splice(index, 1)[0];
    res.json(deleted);
  } else {
    res.status(404).json({ error: 'Tour not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
