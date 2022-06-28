//mongo
const User = require('../models/users');
//json


const usersDB = {
  users: require("../mockdata/MOCK_DATA.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.jwt;

  //MONGO
  let foundUserMongo = await User.findOne({ refreshToken: refreshToken }).exec();
  console.log("🚀 ~ file: loginController.js ~ line 32 ~ handleLogin ~ foundUserMongo", foundUserMongo)

  //JSON
  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken
  );

  if (!foundUser) { 
    return res.sendStatus(403); //forbidden
  }

  //evaluate jwt

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.userName !== decoded.userName) {
      return res.sendStatus(403);

    }

    const accessToken = jwt.sign(
      { "userName": decoded.userName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ user: {id: foundUser.id , userName: foundUser.userName , accessToken } });
  });
};

module.exports = { handleRefreshToken };
