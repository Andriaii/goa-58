const express = require('express');
const app = express();
const toursRouter = require('./router/tours.router');

app.use(express.json()); 


app.use('/tours', toursRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
