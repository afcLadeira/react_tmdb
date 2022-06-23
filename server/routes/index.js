const express = require('express');
const app = express();
const { verifyJWT } = require('../middleware/verifyJWT')


let register = require('./register');
app.use('/register', register);

let login = require('./login');
app.use('/login', login);

let refresh = require('./refresh');
app.use('/refresh', refresh);

let logout = require('./logout');
app.use('/logout', logout);


app.use(verifyJWT)

let test = require('./test');
app.use('/test', test);

let users = require('./users');
app.use('/users', users);

module.exports = app;