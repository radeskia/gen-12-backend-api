const mongoose = require("mongoose");
const { response } = require("..");
const user = require("../models/user");

module.exports = {
  register: async (req, res) => {
    const responseData = {
      message: "User created!",
      error: false,
    };
    try {
      let oldUserCheck = await user.findOne({ email: req.body.email });
      if (oldUserCheck) {
        responseData.error = true;
        responseData.message = "User already exists!";
      } else {
        const User = new user({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          birthday: req.body.birthday,
          password: req.body.password,
        });

        await User.save();
        responseData.user = User;
      }
    } catch (error) {
      responseData.error = true;
      responseData.message = error.message;
    }
    res.json(responseData);
  },
  login: async (req, res) => {},
};
