require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const cors = require("cors");
const { logger } = require("./server/middleware/logger");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001;

const app = express();

const routes = require("./server/routes");
const { errorHandler } = require("./server/middleware/errorHandler");
const connectDB = require("./server/config/dbConn");

const PUBLIC_FOLDER =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "client", "build")
    : path.join(__dirname, "client", "build");

// Connect to MongoDB
connectDB();

//custom middleware
app.use(logger);

// //cors middleware with whitelisting
const allowedOrigins = [
  "https://react-tmdb-di3a9v178-afcladeira.vercel.app",
  "https://react-tmdb-nine.vercel.app",
];
//const allowedOrigins = ['http://localhost:3001' , 'http://localhost:3000']

// //credentials middleware , before CORS!

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  // if (allowedOrigins.includes(origin)) {
  res.header("Access-Control-Allow-Credentials", true);
  //}
  next();
};
app.use(credentials);

const corsOptions = {
  origin: (origin, callback) => {
    //if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
    callback(null, true);
    //} else {
    //  callback(new Error('!!!Not allowed by CORS'))
    // }
  },
  optionsSuccessStatus: 200,
};
//app.use(cors(corsOptions))
app.use(cors(corsOptions));

//middleware to get formData
app.use(express.urlencoded({ extended: true }));

//middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
//app.use(express.static(path.join(__dirname, '/server/public')))
app.use("/", express.static(PUBLIC_FOLDER));

app.use("/api", routes);

app.get("/*", function (req, res) {
  res.sendFile(path.join(PUBLIC_FOLDER, "index.html"));
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
});
