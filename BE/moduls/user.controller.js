const userService = require("./user.service");
const createUser = async (req, res) => {
console.log(req.body)
  try {
    const user = await userService.createUser(req);
    res.json({
      data: user,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};
const loginUser = async (req, res) => {
  const userLogin = await userService.loginUser(req,res);
};
module.exports = {
  createUser,
  loginUser,
};
