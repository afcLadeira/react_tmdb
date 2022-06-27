const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required:true
    },
    movies: {
        type: Array
    },
});

module.exports = mongoose.model('list', listsSchema);



let testjson = { "name" : "test list" , "description" : "test description" , "userId" : 5 , "movies": []}