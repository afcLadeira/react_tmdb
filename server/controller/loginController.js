const usersDB = {
    users: require('../MOCK_DATA.json'),
    setUsers: function (data) {this.users = data}

}

const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')



const handleLogin = async (req,res) => {

    const {userName , password} = req.body

    if (!userName || !password) {
        return res.status(400).json({message:'Username and password are required.'})
    } 

    const foundUser = usersDB.users.find(person => person.userName == userName)

    if (!foundUser) return res.sendStatus(401) //Unauthorized

    //evaluate password

    const match = await bcrypt.compare(password, foundUser.password )
    
    if (match) {
        //create JWT
        //normal token and refresh token
        
        res.json({success: `User ${userName} is logged in` , user: foundUser})
    }
    else {

       return res.sendStatus(401) //Unauthorized

    }

}


module.exports = {handleLogin}