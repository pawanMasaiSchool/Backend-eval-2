const express = require('express');
const { body, validationResult } = require('express-validator');
const user = require('../models/user.model');
const router = express.Router();

router.get("/",(req,res)=>{
    res.json("Users")
})


module.exports = router