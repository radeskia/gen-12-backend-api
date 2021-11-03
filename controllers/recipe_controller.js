const mongoose = require("mongoose");
const recipe = require("../models/recipe");

module.exports = {
  fetchRecipes: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find();
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchBreakfast: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find({ recipe_category: "Breakfast" });
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchBrunch: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find({ recipe_category: "Brunch" });
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchLunch: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find({ recipe_category: "Lunch" });
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchDinner: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find({ recipe_category: "Dinner" });
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchSpecific: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.findById(req.params.id);
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchPopular: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find().sort({'stars': -1}).limit(3);
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  fetchLatest: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find().sort({ _id: -1 }).limit(3);
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  createRecipe: async (req, res) => {
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
        author: req.body.author,
      });
      await Recipe.save();
      responseData.recipe = Recipe;
    } catch (error) {
      responseData.error = true;
      responseData.message = error.message;
    }
    res.json(responseData);
  },
  deleteRecipe: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.findByIdAndDelete(req.params.id);
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  starRecipe: async (req, res) => {
    let resContent = [];
    try {
      const toStar = await recipe.findById(req.params.id);
      const Recipe = await recipe.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { stars: req.params.user } },
        { new: true }
      );
      resContent.push(Recipe);
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
  unstarRecipe: async (req, res) => {
    let resContent = [];
    try {
      const toUnstar = await recipe.findById(req.params.id);
      const Recipe = await recipe.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { stars: req.params.user } },
        { new: true }
      );
      resContent.push(Recipe);
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }
    res.json(resContent);
  },
  fetchByUser: async (req, res) => {
    let resContent = [];

    try {
      resContent = await recipe.find({ author: req.params.id });
    } catch (error) {
      resContent[0] = `Error: ${error.message}`;
    }

    res.json(resContent);
  },
};
