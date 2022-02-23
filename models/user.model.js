const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String, required:true,unique:true},
    password: {type: String, minlength: 8, required: true},
    profile_photo_url: {type:String, required: true},
    roles: {type: String, required: true}
});

const User = mongoose.model("User",userSchema);


module.exports = User;