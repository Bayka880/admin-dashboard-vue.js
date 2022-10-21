const userService = require("./user.service");
const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await userService.createUser(req);
    res.json({
      message: "successfull",
      data: user,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};
const loginUser = async (req, res) => {
  const userLogin = await userService.loginUser(req, res);
};
const getAllUser = async (req, res) => {
  try {
    const users = await userService.getUsers(req);
    res.json({
      data: users,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req);
    res.status(200).json({
      message: "success",
      data: deletedUser,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
module.exports = {
  createUser,
  loginUser,
  getAllUser,
  deleteUser,
};
