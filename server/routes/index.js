const express = require('express');
const app = express();

let test = require('./test');
app.use('/test', test);

let users = require('./users');
app.use('/users', users);

let register = require('./register');
app.use('/register', register);

let login = require('./login');
app.use('/login', login);

module.exports = app;