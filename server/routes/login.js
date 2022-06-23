const express = require('express');
const loginController = require('../controller/loginController');

const app = express();


app.post('/', loginController.handleLogin);

module.exports = app;
