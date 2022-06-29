const express = require("express");
const favoritesController = require("../controller/favoritesController");

const app = express();

app.post("/:id", favoritesController.addFavorite);
app.delete("/:userId/:movieId", favoritesController.deleteFavorite);

module.exports = app;
