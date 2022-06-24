const usersDB = {
    users: require('../MOCK_DATA.json'),
    setUsers: function (data) {this.users = data}

}

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const { builtinModules } = require('module')
require('dotenv').config()


const fsPromises = require('fs').promises
const path = require('path')



const getFavoritesByUser = async (req,res) => {

    console.log(req.params)

    res.senStatus(200)

}



module.exports = {getFavoritesByUser}