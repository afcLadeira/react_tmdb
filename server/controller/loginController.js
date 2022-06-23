const usersDB = {
    users: require('../MOCK_DATA.json'),
    setUsers: function (data) {this.users = data}

}

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
require('dotenv').config()


const fsPromises = require('fs').promises
const path = require('path')


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
        console.log(process.env.ACCESS_TOKEN_SECRET)
        console.log(process.env.REFRESH_TOKEN_SECRET)

        const accessToken = jwt.sign( {
            "userName" : foundUser.userName },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h'}
        )
        const refreshToken = jwt.sign( {
            "userName" : foundUser.userName },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d'}
        )


        //save refreshtoken to BD
        //json for now
        const otherUsers = usersDB.users.filter(person => person.userName !== foundUser.userName)
        const currentUser = {...foundUser , refreshToken}

        usersDB.setUsers([...otherUsers , currentUser])
        await fsPromises.writeFile(
            path.join(__dirname,'../MOCK_DATA.json'), //overwrites if exists
            JSON.stringify(usersDB.users)
        )
        //----------------------------------
        res.cookie('jwt' , refreshToken, { httpOnly: true , sameSite: 'None', secure: true , maxAge:24 * 60 * 60 * 1000})
        res.json({success: `User ${userName} is logged in` , user: {...foundUser , accessToken }})
    }
    else {

       return res.sendStatus(401) //Unauthorized

    }

}


module.exports = {handleLogin}