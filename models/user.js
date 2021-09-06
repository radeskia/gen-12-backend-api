const mongoose = require("mongoose");

const User = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required!"],
  },
  last_name: {
    type: String,
    required: [true, "Last name is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
  },
  birthday: {
    type: String,
    required: [true, "Birthday is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  avatar: {
    type:String
  }
});

module.exports = mongoose.model("User", User);
