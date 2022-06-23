const usersDB = {
  users: require("../MOCK_DATA.json"),
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

  console.log('cookies.jwt' , cookies.jwt);

  const refreshToken = cookies.jwt;
  console.log("🚀 ~ file: refreshController.js ~ line 21 ~ handleRefreshToken ~ refreshToken", refreshToken)

  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken
  );
  console.log("🚀 ~ file: refreshController.js ~ line 26 ~ handleRefreshToken ~ foundUser", foundUser)

  if (!foundUser) return res.sendStatus(403); //forbidden

  //evaluate jwt

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.userName !== decoded.userName) {

      return res.sendStatus(403); //forbidden

    }

    const accessToken = jwt.sign(
      { "userName": decoded.userName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
