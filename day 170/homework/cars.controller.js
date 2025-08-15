let cars = [
    { id: 1, brand: 'BMW', model: 'X5', year: 2020 },
    { id: 2, brand: 'Mercedes', model: 'C200', year: 2019 },
    { id: 3, brand: 'Audi', model: 'A6', year: 2021 }
];

const getAllCars = (req, res) => {
    res.json(cars);
};

const getCarById = (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(c => c.id === id);
    if (!car) return res.status(404).json({ status: 'fail', message: 'Car not found' });
    res.json(car);
};

const addCar = (req, res) => {
    const { brand, model, year } = req.body;
    if (!brand || !model || !year) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newCar = {
        id: cars.length ? cars[cars.length - 1].id + 1 : 1,
        brand,
        model,
        year
    };
    cars.push(newCar);
    res.status(201).json(newCar);
};

const updateCar = (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(c => c.id === id);
    if (!car) return res.status(404).json({ status: 'fail', message: 'Car not found' });

    const { brand, model, year } = req.body;
    if (brand) car.brand = brand;
    if (model) car.model = model;
    if (year) car.year = year;
    res.json(car);
};

const deleteCar = (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex(c => c.id === id);
    if (index === -1) return res.status(404).json({ status: 'fail', message: 'Car not found' });

    const deleted = cars.splice(index, 1);
    res.json({ message: 'Car deleted', car: deleted[0] });
};

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};
