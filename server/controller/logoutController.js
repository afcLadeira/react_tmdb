//mongo
const User = require('../models/users');



const handleLogout = async (req, res) => {
  //todo: ON CLIENT ALSO DELETE accessToken if needed

  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204); //no content
  }

  const refreshToken = cookies.jwt;

    //MONGO
    let foundUser = await User.findOne({ refreshToken: refreshToken }).exec();

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204); //no content
  }

  //delete refreshToken in db

  try {

       // with mongo db

       foundUser.refreshToken = ""
       const result = await foundUser.save();
       //------------------------------

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};

module.exports = { handleLogout };
