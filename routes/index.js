var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipe_controller");
const user_controller = require("../controllers/user_controller")
const cors = require("cors");

router
//Recipe routes
  .get("/recipes", cors(), recipe_controller.get_recipes)
  .get("/breakfast", cors(), recipe_controller.get_breakfast)
  .get("/brunch", cors(), recipe_controller.get_brunch)
  .get("/lunch", cors(), recipe_controller.get_lunch)
  .get("/dinner", cors(), recipe_controller.get_dinner)
  .post("/create", recipe_controller.create_recipe)
  // .delete("/recipes/:id", recipe_controller.delete_recipe);
  
//User routes  
  .post("/register", cors(), user_controller.register)
  .post("/login", cors(), user_controller.login)
  //Override express default search for favicons
  .get("/favicon.ico", (req, res) => {
    res.sendStatus(204);
  })
  .get("/images/icons/gear.png", (req, res) => {
    res.sendStatus(204);
  });

module.exports = router;
