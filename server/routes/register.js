const express = require('express');
const registerController = require('../controller/registerController');

const app = express();


app.post('/', registerController.handleNewUser);

module.exports = app;
