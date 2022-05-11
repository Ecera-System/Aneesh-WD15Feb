const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    date:String,
    approved:Boolean,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    event:{
        type:mongoose.Types.ObjectId,
        ref:"Event"
    }
});
module.exports = mongoose.model("Registration", RegistrationSchema)