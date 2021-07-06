const mongoose = require("mongoose");

const Recipe = mongoose.Schema({
  recipe_title: {
    type: String,
    required: [true, "Recipe title is required"],
    unique: true,
  },
  recipe_content: {
    type: String,
    required: [true, "Recipe content is required!"],
  },
  recipe_image: {
    type: String,
    required: [true, "Recipe content is required!"]
  },
  recipe_category: {
    type: String,
    required: [true, "Recipe category is required!"],
  },
  recipe_description: {
    type: String,
    required: [true, "Recipe description is required!"],
  },
  recipe_prep_time: {
    type: Number,
    required: [true, "Recipe preparation time is required!"],
  },
  number_of_people: {
    type: Number,
    required: [true, "Number of people recipe is intended for is required!"]
  },
});

module.exports = mongoose.model("Recipe", Recipe);