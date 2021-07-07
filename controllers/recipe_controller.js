const mongoose = require("mongoose");
const recipe = require("../models/recipe");

module.exports = {
  get_recipes: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find();
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  create_recipe: async (req, res) => {
    const responseData = {
      message: "Recipe created!",
      error: false,
    };
    try {
      const Recipe = new recipe({
        recipe_title: req.body.recipe_title,
        recipe_content: req.body.recipe_content,
        recipe_image: req.body.recipe_image,
        recipe_category: req.body.recipe_category,
        recipe_description: req.body.recipe_description,
        recipe_prep_time: req.body.recipe_prep_time,
        number_of_people: req.body.number_of_people,
      });
      await Recipe.save();
      responseData.recipe = Recipe;
    } catch (error) {
      responseData.error = true;
      responseData.message = error.message;
    }
    res.json(responseData);
  },
};
