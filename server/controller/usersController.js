//var mockData = require('../mockdata/MOCK_DATA.json')


const getUsers = async (req, res) => {
    try {
        
        setTimeout(() => {    
            res.status(200).json({})
        }, 5000);
     
    } catch (e) {
        res.status(500).send("Internal server error.");
    }
}




module.exports = {getUsers}