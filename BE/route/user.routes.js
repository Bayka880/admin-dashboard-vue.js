const userController=require("../moduls/index")
const express=require("express")
const router=express.Router()

router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/",userController.getAllUser)
module.exports=router