// require('dotenv').config({ path: './config/.env' });  // Should be at the top of your main file
require('dotenv').config();
require('dotenv').config({ path: './config/.env' });

// const mongoose= require("mongoose");
// const bcrypt=require("bcryptjs");
// const dotenv=require('dotenv');
// const jwt=require("jsonwebtoken");
// const userSchema=new mongoose.Schema({
//     username:{
//         type:String,
//         require:true,
//     },
//     email:{
//         type:String,
//         require:true,
//     },
//     phone:{
//         type:String,
//        require:true,
//     },
//     password:{
//         type:String,
//         require:true,
//     },
//     isAdmin:{
//         type:Boolean,
//         default:false,

//     },
    
// });
//   //secure the password with the bcryptjs
//  userSchema.pre("save",async function(next){ //database me save hone se pehele ye run hoga matlab controller se pehele ye run hoga then data base me save hoga 
//    console.log("pre method",this) //this likhne par sara ka sara data mil raha hai //pre method lagane se jo bhi data base me store hone wala hai vo terminal me dikh jayega bro pehele hi
//    const user=this;
//    if(!user.isModified("password")) { // if(!user.isModified("password")) next(); matlab nahi hua to ! iska matlab ye hai next ka ki password hi modified matlb chnage nahi hua hai to next par pahucha do 
//     next();
//    }
//    try { 
//     const saltRound=await bcrypt.genSalt(10);
//     const hash_password=await bcrypt.hash(user.password,saltRound);
//     user.password=hash_password;
    
//    } catch (error) {
//       next(error);
//    }
// });
// //json web token (imp) userSchema.methods.generateToken=function(){}; ese ab cantroller me excess kar skate hai //with the help of methods hum kitne bhi function create kar skte hai 
// userSchema.methods.generateToken = async function () {
//   try {
//     return jwt.sign(
//       {
//         email: this.email,
//         isAdmin: this.isAdmin,
//       },
//       process.env.JWT_SECRETE_KEY,
//       {
//         expiresIn: "30d",
//       }
//     );


//   } catch (error) {
//     console.log(error);
//   }
//   console.log(process.env.JWT_SECRETE_KEY);
// }; 

// const User=new  mongoose.model("User", userSchema);
// module.exports=User;
require('dotenv').config();  // This should be at the top
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateToken = async function () {
  try {
    console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);  // Debugging line
    const token = jwt.sign(
      {
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
