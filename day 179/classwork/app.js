const express = require('express');
const postController = require('./post.controller');
const globalErrorHandler = require('./error.controller');

const app = express();


app.get('/posts/:id', postController.getPost);


app.use(globalErrorHandler);

module.exports = app;



