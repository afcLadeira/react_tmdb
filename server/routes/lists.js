const express = require('express');
const mylistsController = require('../controller/mylistsController');

const app = express();


app.put('/:id', mylistsController.updateListMovies);



module.exports = app;

