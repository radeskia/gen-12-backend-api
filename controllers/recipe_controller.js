const mongoose = require("mongoose");
const recipe = require("../models/recipe");

module.exports = {
  get_recipes: async (req, res) => {
    const resContent = {
      error: false,
    };

    try {
      resContent.recipes = await recipe.find();
    } catch (error) {
      resContent.error = true;
      resContent.message = error.message;
    }

    res.json(resContent);
  },
  create_recipe: async (req, res) => {
    const resContent = {
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
      resContent.recipe = Recipe;
    } catch (error) {
      resContent.error = true;
      resContent.message = error.message;
    }
    res.json(resContent);
  },
};
