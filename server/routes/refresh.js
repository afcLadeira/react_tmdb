const express = require('express');
const refreshController = require('../controller/refreshController');

const app = express();


app.get('/', refreshController.handleRefreshToken);

module.exports = app;
