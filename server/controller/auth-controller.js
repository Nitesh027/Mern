require('dotenv').config();  // Should be at the top of your main file

const { json } = require("express");
const User=require("../models/user-models");
const bcrypt=require("bcryptjs")





const home=async(req,res)=>{
    try{
        res.status(200).send("welcome to the world best mern stack series by thpa technical bbb");

    }
    catch(error){
        console.log(error);
    }
};
  //*------------------
 // registration logic //
 //*-------------------

 const register=async(req,res)=>{
    try{
        console.log(req.body);
        const {username,email,phone,password}=req.body ;
        //console.log(data)
        const userExist= await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email already exists"})
        }
        // //hash password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,10)
        //kabhi email exist nahi karti to ye bana do create kar do
        const userCreated=await User.create({ 
            username,
            email,
            phone,
            password}); //password:hash_password
        res
        .status(201)
        .json({msg:userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    }
    catch(error){
       res.status(500).json({msg:"interval server not found"})
    }
 };

 
 
 module.exports={home,register};