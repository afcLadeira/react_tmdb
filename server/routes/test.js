const express = require('express')

const app = express();


app.get('/', async (req, res) => {
    try {
        
        let result = [
            {country: 'Portugal'},
            {country: 'Belgium'},
            {country: 'Germany'},
            {country: 'Bulgaria'},
            {country: 'Spain'},
            {country: 'France'},
          ]
        res.status(200).json(result)
    } catch (e) {
        res.status(500).send("Internal server error.");
    }
});


module.exports = app;
