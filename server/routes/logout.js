const express = require('express');
const logoutController = require('../controller/logoutController');

const app = express();


app.get('/', logoutController.handleLogout);

module.exports = app;
