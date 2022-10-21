const User = require("./user.model");

const createUser = async (req) => {
  const user = new User(req.body);
  return user.save();
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findExistingUser = await User.find({ email: email });

    if (findExistingUser[0].password == password) {
      res.json({
        message: "success",
        data: findExistingUser,
      });
    } else {
      res.status(404).json({
        message: "Email or password wrong",
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
const getUsers = async (req) => {
  const users = await User.find({});
  return users;
};
const deleteUser = async (req) => {
  const { id } = req.params;
  const result = await User.findByIdAndDelete(id);
  return result;
};
module.exports = {
  createUser,
  loginUser,
  deleteUser,
  getUsers,
};
