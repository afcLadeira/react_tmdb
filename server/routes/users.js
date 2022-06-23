const express = require('express');
const usersController = require('../controller/usersController');
const registerController = require('../controller/registerController');

const app = express();

app.get('/', usersController.getUsers);





app.get('/register', registerController.handleNewUser);




module.exports = app;
