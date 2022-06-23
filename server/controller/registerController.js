const usersDB = {
    users: require('../MOCK_DATA.json'),
    setUsers: function (data) {this.users = data}

}

const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')


const handleNewUser = async (req,res) => {


    const { userName , password } = req.body
    console.log("🚀 ~ file: registerController.js ~ line 16 ~ handleNewUser ~ password", password)
    console.log("🚀 ~ file: registerController.js ~ line 16 ~ handleNewUser ~ userName", userName)
    console.log("🚀 ~ file: registerController.js ~ line 16 ~ handleNewUser ~ req.body", req.body)

    
    if (!userName || !password) {
        return res.status(400).json({message:'Username and password are required.'})
    } 

    //check for duplicate user names
    //for now testing with the users json

    const duplicate = usersDB.users.find(person => person.userName == userName)
    if (duplicate) return res.status(409).json({message:'Username already exists.'})


    try {

        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10)
        //store the new user
        const newUser = {"id":usersDB.users[usersDB.users.length-1].id +1,
        "first_name":userName + "first name",
        "last_name":userName + "last name",
        "email":userName + "@fakeemail.com",
        "gender":"Male",
        "ip_address":"195.207.81.124",
        "userName":userName,
        "password" : hashedPwd
    }

        usersDB.setUsers([...usersDB.users , newUser])

        await fsPromises.writeFile(
            path.join(__dirname,'../MOCK_DATA.json'), //overwrites if exists
            JSON.stringify(usersDB.users)
        )

        res.status(201).json({ success : `New user ${userName} created`})


    }
    catch(error) {
        return res.status(500).json({'message' : error.message})
    }


}

module.exports = {handleNewUser}