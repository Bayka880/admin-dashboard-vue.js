const { body, validationResult } = require("express-validator");

const userValidationResult = () => {
  console.log(body["password"]);
  return [body("firsname").isAlpha(), body("password").isStrongPassword()];
};
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }
  const extractedErrors = [];
  errors.array().map((err) => {
    extractedErrors.push({ [err.param]: err.msg });
  });
  return res.status(400).json({ errors: extractedErrors });
};
module.exports = { validate, userValidationResult };
