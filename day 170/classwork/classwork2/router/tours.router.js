const express = require('express');
const router = express.Router();
const tours = [
    { id: 1, name: 'Kutaisi', price: 300 },
    { id: 2, name: 'Tbilisi', price: 150 },
    { id: 3, name: 'Batumi', price: 255 }
];

router.get('/', (req, res) => {
    res.json(tours);
});

router.get('/:id', (req, res) => {
    const tour = tours.find(t => t.id === parseInt(req.params.id));
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
});

router.post('/', (req, res) => {
    const newTour = {
        id: tours.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    tours.push(newTour);
    res.status(201).json(newTour);
});

router.put('/:id', (req, res) => {
    const tour = tours.find(t => t.id === parseInt(req.params.id));
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    tour.name = req.body.name || tour.name;
    tour.price = req.body.price || tour.price;
    res.json(tour);
});

router.delete('/:id', (req, res) => {
    const index = tours.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    const deletedTour = tours.splice(index, 1);
    res.json(deletedTour);
});
module.exports = router;