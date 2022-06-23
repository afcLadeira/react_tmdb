const express = require("express");

const path = require('path');
const cors = require('cors')
const { logger } = require("./middleware/logger");

const PORT = process.env.PORT || 3001;

const app = express();

const routes = require('./routes');
const { errorHandler } = require("./middleware/errorHandler");

//custom middleware
app.use(logger)

//cors middleware with whitelisting
const whiteList = ['http://localhost:3001']

const corsOptions = {
  origin: (origin , callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null , true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus:200
}
app.use(cors(corsOptions))

//middleware to get formData
app.use(express.urlencoded({extended:true}))

//middleware for json
app.use(express.json())

//serve static files
app.use(express.static(path.join(__dirname, '/public')))

app.use('/api', routes);

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 