var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipe_controller");

router
  .get("/recipes", recipe_controller.get_recipes)
  .post("/create", recipe_controller.create_recipe)
 // .delete("/recipes/:id", recipe_controller.delete_recipe);

module.exports = router;
