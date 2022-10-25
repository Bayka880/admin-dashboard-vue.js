const userController = require("../moduls/index");
const express = require("express");
const router = express.Router();
const validata = require("../middleware/auht");
router.post(
  "/register",
  validata.userValidationResult(),
  validata.validate(),
  userController.createUser
);
router.post("/login", userController.loginUser);
router.get("/", userController.getAllUser);
router.delete("/delete/:id", userController.deleteUser);
module.exports = router;
