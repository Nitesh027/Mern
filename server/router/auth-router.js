//express.Router

const express=require("express");
const router=express.Router();
const authcontrollers=require("../controller/auth-controller");



//const {home,register,login,sign}=require("../controller/auth-controller"); ya to ese kar sakte hai const authcontrollers=require("../controller/auth-controller");
//ese bhi kar skte ya ek sath likh do reuire kar lo home ko or register ko
//const {home,register}=require("../controller/auth-controller");

router.route("/").get(authcontrollers.home)
    //rourter.route 
router.route("/register").post(authcontrollers.register)
module.exports=router;