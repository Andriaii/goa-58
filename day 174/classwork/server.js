// const express = require('express');
// const app = express();

// function myLogger(req, res, next) {
//     const start = Date.now();

    
//     res.on('finish', () => {
//         const duration = Date.now() - start;
//         console.log(
//             `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
//         );
//     });

    
//     next();
// }


// app.use(myLogger);


// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });








const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config();

const app = express();


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
    
}


app.get('/', (req, res) => {
    res.send('Hello World 🌍');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
