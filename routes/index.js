var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipe_controller");
const cors = require('cors');

router
  .get("/recipes", cors(), recipe_controller.get_recipes)
  .post("/create", recipe_controller.create_recipe)
  // .delete("/recipes/:id", recipe_controller.delete_recipe);

  //Override express default search for favicons
  .get("/favicon.ico", (req, res) => {
    res.sendStatus(204);
  })
  .get("/images/icons/gear.png", (req, res) => {
    res.sendStatus(204);
  });

module.exports = router;
