const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    favoriteMovies: {
        type: Array
    },
});

module.exports = mongoose.model('favorites', favoritesSchema);

