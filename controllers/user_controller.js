const mongoose = require("mongoose");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const responseData = {
      message: `User created!`,
      error: false,
    };

    //Password encryption on user registration
    let passHash;
    bcrypt.hash(req.body.password, 5, (err, hash) => {
      passHash = hash;
    });

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
          password: passHash,
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
  login: async (req, res) => {
    const responseData = {
      message: `Loged in!`,
      error: false,
    };
    try {
      const User = await user.findOne({ email: req.body.email });
      if (!User) {
        responseData.error = true;
        responseData.message = `User not found!`;
        res.json(responseData);
      }

      const passCheck = bcrypt.compareSync(req.body.password, User.password);

      if (passCheck) {
        const payload = {
          id: User._id,
          email: User.email,
        };
        const token = jwt.sign(payload, process.env.AUTH_SECRET, {
          expiresIn: "120m",
        });

        responseData.error = false;
        responseData.message = "Login successful! token = " + token;

        res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 1000 }),
          res.json(responseData);
      } else {
        responseData.error = true;
        responseData.message = `Invalid password!`;
        res.json(responseData);
      }
    } catch (error) {
      responseData.error = true;
      responseData.message = error.message;
      res.json(responseData);
    }
  },
  logout: async (req, res) => {
    const responseData = {
      message: `Logout successful!`,
      error: false,
    };
    try {
      res.cookie("token", "", { maxAge: 1 }), res.json(responseData);
    } catch (error) {
      responseData.error = true;
      responseData.message = error.message;
      res.json(responseData);
    }
  },
};
