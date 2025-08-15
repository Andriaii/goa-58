const express = require('express');
const router = express.Router();
const {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
} = require('./cars.controller');

router.get('/cars', getAllCars);
router.get('/cars/:id', getCarById);
router.post('/cars', addCar);
router.patch('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

module.exports = router;
