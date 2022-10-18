const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true
  },
  password: {
    type: String,
    required:true,
  },
});
const User=mongoose.model("users" , userSchema)
module.exports=User