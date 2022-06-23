const jwt = require('jsonwebtoken')
require('dotenv').config()
const fsPromises = require('fs').promises
const path = require('path')

const verifyJWT = (req,res,next) => {

    const authHeader = req.headers['authorization']
    console.log("🚀 ~ file: verifyJWT.js ~ line 9 ~ verifyJWT ~ req.headers", req.headers)
    console.log("🚀 ~ file: verifyJWT.js ~ line 9 ~ verifyJWT ~ authHeader", authHeader)

    if (!authHeader) return res.sendStatus(401)

    const token = authHeader.split(' ')[1]

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {


        if (err) return res.sendStatus(403) //invalid token
        req.user = decoded.userName
        next()
    })

}


module.exports = { verifyJWT }