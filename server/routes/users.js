const express = require('express');
const usersController = require('../controller/usersController');
const registerController = require('../controller/registerController');
const { verifyJWT } = require('../middleware/verifyJWT')

const app = express();

app.get('/', usersController.getUsers);
// app.get('/',verifyJWT, usersController.getUsers);



module.exports = app;
