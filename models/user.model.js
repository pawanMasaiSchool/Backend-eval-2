const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String, required:true,unique:true},
    password: {type: String, minlength: 8, required: true},
    profile_photo_url: {type:String, required: true},
    roles: {type: String, required: true}
});

userSchema.pre("save",(next)=>{
    if(!this.isModified("password")){
        return next()
    }
    bcrypt.hash(this.password, 8, (err,hash)=>{
        if(err) return next(err);
        this.password = hash;
        next();
    });
})

const User = mongoose.model("User",userSchema,"user");


module.exports = User;