const express = require('express');
const usersController = require('../controller/usersController');
const mylistsController = require('../controller/mylistsController');

const app = express();

app.get('/', usersController.getUsers);
// app.get('/',verifyJWT, usersController.getUsers);



app.get('/:userId/lists', mylistsController.getAllListsFromUser);
app.post('/:userId/lists', mylistsController.createList);
app.put('/:userId/lists/:id', mylistsController.updateList);
app.delete('/:userId/lists/:id', mylistsController.deleteList);



module.exports = app;


