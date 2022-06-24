const usersDB = {
  users: require("../MOCK_DATA.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
  //ON CLIENT ALSO DELETE accessToken

  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204); //no content
  }

  const refreshToken = cookies.jwt;

  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken
  );

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204); //no content
  }

  //delete refreshToken in db
  //json for now

  const otherUsers = usersDB.users.filter(
    (person) => person.refreshToken !== foundUser.refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };

  try {
    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "../MOCK_DATA.json"), //overwrites if exists
      JSON.stringify(usersDB.users)
    );
    //----------------------------------

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};

module.exports = { handleLogout };
