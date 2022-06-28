//mongo
const User = require("../models/users");

//const bcrypt = require("bcrypt");
const bcrypt = require('bcryptjs');

const handleNewUser = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  //MONGO
  let duplicate = await User.findOne({ userName: userName }).exec();

  if (duplicate)
    return res.status(409).json({ message: "Username already exists." });

  try {
    //encrypt the password
    //const hashedPwd = await bcrypt.hash(password, 10);

    //bcryptjs
    const hashedPwd = bcrypt.hashSync(password, 10);

    //store the new user

    //MONGO

    let usersCount = await User.countDocuments({});

    const newUserMongo = {
      id: usersCount === 0 ? 1 : usersCount + 1,
      email: userName + "@fakeemail.com",
      userName: userName,
      password: hashedPwd,
    };

    const result = await User.create(newUserMongo);
    console.log(
      "🚀 ~ file: registerController.js ~ line 81 ~ handleNewUser ~ result",
      result
    );

    //------------------------------------

    res.status(201).json({ success: `New user ${userName} created` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
