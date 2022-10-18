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
        message: "successfull",
        data: findExistingUser,
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
module.exports = {
  createUser,
  loginUser,
};
