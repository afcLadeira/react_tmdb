//mongo
const User = require('../models/users');
const Favorite = require("../models/favorites");



const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.jwt;

  //MONGO
  let foundUser = await User.findOne({ refreshToken: refreshToken }).exec();

  if (!foundUser) { 
    return res.sendStatus(403); //forbidden
  }

  //evaluate jwt

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err || foundUser.userName !== decoded.userName) {
      return res.sendStatus(403);

    }

    const accessToken = jwt.sign(
      { "userName": decoded.userName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    let userFavorites
      try {
     userFavorites = await Favorite.findOne({ userId: foundUser.id }).exec();
      }
      catch(error) {
        userFavorites = []
      }

    res.json({ user: {id: foundUser.id , userName: foundUser.userName , accessToken }, favorites: userFavorites ? userFavorites : { userId: foundUser.id , favoriteMovies :[]} });
  });
};

module.exports = { handleRefreshToken };
