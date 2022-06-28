//mongo
const User = require('../models/users');


//const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')




const handleLogin = async (req,res) => {

    const {userName , password} = req.body

    if (!userName || !password) {
        return res.status(400).json({message:'Username and password are required.'})
    } 

    //MONGO
    let foundUser = await User.findOne({ userName: userName }).exec();

    if (!foundUser) return res.sendStatus(401) //Unauthorized

    //evaluate password

    //const match = await bcrypt.compare(password, foundUser.password )
    
    //bcryptjs
    const match = bcrypt.compare(password, foundUser.password);
    
    if (match) {
        //create JWT
        //normal token and refresh token

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


        // with mongo db

        foundUser.refreshToken = refreshToken
        const result = await foundUser.save();
        //------------------------------


        res.cookie('jwt' , refreshToken, { httpOnly: true , sameSite: 'None', secure: true , maxAge:24 * 60 * 60 * 1000})
        res.json({success: `User ${userName} is logged in` , user: {id: foundUser.id , userName:foundUser.userName , accessToken }})
    }
    else {

       return res.sendStatus(401) //Unauthorized

    }

}


module.exports = {handleLogin}