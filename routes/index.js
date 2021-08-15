var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipe_controller");
const user_controller = require("../controllers/user_controller")
const cors = require("cors");

router
//Recipe routes
  .get("/", cors(), recipe_controller.fetchRecipes)
  .get("/breakfast", cors(), recipe_controller.fetchBreakfast)
  .get("/brunch", cors(), recipe_controller.fetchBrunch)
  .get("/lunch", cors(), recipe_controller.fetchLunch)
  .get("/dinner", cors(), recipe_controller.fetchDinner)
  .get("/recipe/:id", cors(), recipe_controller.fetchSpecific)
  .post("/create", cors(), recipe_controller.createRecipe)
  .delete("/:id", cors(), recipe_controller.deleteRecipe)
  .patch("/star/:id", cors(), recipe_controller.starRecipe)
  .patch("/unstar/:id", cors(), recipe_controller.unstarRecipe)
  
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
