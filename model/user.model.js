const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    fullName: {
        type: String, 
        maxLength: 50,
        default: ""
    },
    username: {
        type:String, 
        required: true,
        maxLength: 25,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: (value)=>{
            if(validator.isEmail(value))
              return true;
            else return false;
        }
    }
})

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;