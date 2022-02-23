const express = require('express');
const { body, validationResult } = require('express-validator');
const { json } = require('express/lib/response');
const user = require('../models/user.model');
const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        const allUsers = await user.find();
        res.status(200).json(allUsers);
    }
    catch(e){
        return res.status(400).json({messege:"Something went wrong"})
    }
});



//post "/users" => which will create a user and also the profile_photo has to be uploaded along with suitable role.
router.post("/", 
    body("name").not().isEmpty().isLength({min:4}),
    body("email").not().isEmpty().isLength({min:11}),
    body("password").not().isEmpty().isLength({min:8}),
    body("roles").not().isEmpty()
,async(req,res)=>{
    try{
        //validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            roles: req.body.roles,
        })
        if(!newUser) return res.status(403),json("new User NOT created");
        return res.status(200).json(newUser);
    }
    catch(e){
        return res.status(400).json({messege:"Something went wrong"})
    }
})

module.exports = router