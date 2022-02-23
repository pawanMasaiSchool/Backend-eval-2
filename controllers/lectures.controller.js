const express = require('express');
const { body, validationResult } = require('express-validator');
const lectures = require('../models/lecture.model');
const router = express.Router();

router.get("/",(req,res)=>{
    res.json("Lectures")
})


module.exports = router