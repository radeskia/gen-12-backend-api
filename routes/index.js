var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipe_controller");
const user_controller = require("../controllers/user_controller")

router
//Recipe routes
  .get("/", recipe_controller.fetchRecipes)
  .get("/breakfast", recipe_controller.fetchBreakfast)
  .get("/brunch", recipe_controller.fetchBrunch)
  .get("/lunch", recipe_controller.fetchLunch)
  .get("/dinner", recipe_controller.fetchDinner)
  .get("/recipe/:id", recipe_controller.fetchSpecific)
  .get("/popular", recipe_controller.fetchPopular)
  .get("/latest", recipe_controller.fetchLatest)
  .post("/create", recipe_controller.createRecipe)
  .delete("/:id", recipe_controller.deleteRecipe)
  .patch("/star/:id", recipe_controller.starRecipe)
  .patch("/unstar/:id", recipe_controller.unstarRecipe)
  
//User routes  
  .post("/register", user_controller.register)
  .post("/login", user_controller.login)
  .get("/logout", user_controller.logout)

  //Override express default search for favicons
  .get("/favicon.ico", (req, res) => {
    res.sendStatus(204);
  })
  .get("/images/icons/gear.png", (req, res) => {
    res.sendStatus(204);
  });

module.exports = router;
