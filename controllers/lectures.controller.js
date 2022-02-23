const express = require('express');
const { body, validationResult } = require('express-validator');
const lectures = require('../models/lecture.model');
const router = express.Router();


//get "/lectures" => get all lectures ( authentication not required for this endpoint).
router.get("/",async (req,res)=>{
    try{
        const allLectures = await lectures.find();
        res.status(200).json(allLectures)
    }
    catch(e){
        return res.status(400).json({messege:"Something went wrong"})
    }
})

// get "/lectures/:id" ( authentication not required )
router.get("/:lecId", async(req,res)=>{
    try{
        const lec = await lectures.findOne({author_id: req.params.lecId});
        if(!lec) return res.status(404).json("Lecture is not scheduled");
        res.status(200).json(lec);
    }
    catch(err){
        return res.status(400).json({msg:"Could not get the lecture"})
    }
});



module.exports = router