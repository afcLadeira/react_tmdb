//mongo
const User = require('../models/users');
//json

const usersDB = {
  users: require("../mockdata/MOCK_DATA.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  //check for duplicate user names
  //for now testing with the users json

  //MONGO
  let duplicateMongo = await User.findOne({ userName: userName }).exec();

  //JSON
  const duplicate = usersDB.users.find((person) => person.userName == userName);



  if (duplicate)
    return res.status(409).json({ message: "Username already exists." });

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    //store the new user


    //JSON
    const newUser = {
      id:
        usersDB.users.length === 0
          ? 1
          : usersDB.users[usersDB.users.length - 1].id + 1,
      email: userName + "@fakeemail.com",
      userName: userName,
      password: hashedPwd,
    };

    usersDB.setUsers([...usersDB.users, newUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "../mockdata/MOCK_DATA.json"),
      JSON.stringify(usersDB.users)
    );
    //----------------------------------------

    //MONGO

    let usersCount = await User.countDocuments({});
    console.log("🚀 ~ file: registerController.js ~ line 67 ~ handleNewUser ~ usersCount", usersCount)


    const newUserMongo = {
        id:
        usersCount === 0
            ? 1
            : usersCount + 1,
        email: userName + "@fakeemail.com",
        userName: userName,
        password: hashedPwd,
      };

      const result = await User.create(newUserMongo)
      console.log("🚀 ~ file: registerController.js ~ line 81 ~ handleNewUser ~ result", result)

    //------------------------------------

    res.status(201).json({ success: `New user ${userName} created` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
