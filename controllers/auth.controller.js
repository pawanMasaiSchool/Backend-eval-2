const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require("dotenv").config()

const newToken = (user) => {
    return jwt.sign({id:user.id}, process.env.JWT_SECRET_KEY);
};


const signup = async(req,res) => {
    try{
        const user = await User.create(req.body);
        const token = newToken(user);
        return res.status(201).json({data: token})
    }
    catch(e){
        return res.status(500).json({messege: "Something is wrong"})
    }
    
}

const signin = async (req,res) => {
    return res.send("User")
}

module.exports = {
    signup, signin
}