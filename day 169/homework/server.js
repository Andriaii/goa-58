const express = require('express');
const app = express();


app.use(express.json());


let products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Headphones', price: 150 }
];


app.get('/products', (req, res) => {
    let { sort, limit } = req.query;
    let result = [...products];

    
    if (sort === 'asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        result.sort((a, b) => b.price - a.price);
    }

    
    if (limit) {
        limit = parseInt(limit);
        if (!isNaN(limit) && limit > 0) {
            result = result.slice(0, limit);
        }
    }

    res.json(result);
});


app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});


app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});


app.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, price } = req.body;
    if (name) product.name = name;
    if (price) product.price = price;

    res.json(product);
});


app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: 'Product not found' });

    const deleted = products.splice(index, 1);
    res.json({ message: 'Product deleted', product: deleted[0] });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
