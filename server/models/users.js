const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    refreshToken: {
        type: String
    },
});

module.exports = mongoose.model('user', usersSchema);

