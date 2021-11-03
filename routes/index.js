var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipe_controller");
const user_controller = require("../controllers/user_controller");
const cors = require("cors");

router
  //Recipe routes
  .get("/api", recipe_controller.fetchRecipes)
  .get("/api/breakfast", recipe_controller.fetchBreakfast)
  .get("/api/brunch", recipe_controller.fetchBrunch)
  .get("/api/lunch", recipe_controller.fetchLunch)
  .get("/api/dinner", recipe_controller.fetchDinner)
  .get("/api/recipe/:id", recipe_controller.fetchSpecific)
  .get("/api/popular", recipe_controller.fetchPopular)
  .get("/api/latest", recipe_controller.fetchLatest)
  .get("/api/myrecipes/:id", recipe_controller.fetchByUser)
  .post("/api/create", recipe_controller.createRecipe)
  .delete("/api/:id", recipe_controller.deleteRecipe)
  .patch("/api/star/:id/:user", recipe_controller.starRecipe)
  .patch("/api/unstar/:id/:user", recipe_controller.unstarRecipe)

  //User routes
  .post("/api/register", user_controller.register)
  .post("/api/login", user_controller.login)
  .get("/api/logout", user_controller.logout)
  .put("/api/update", user_controller.update)
  .get("/api/:id", user_controller.fetchUser)

  //Override express default search for favicons
  .get("/favicon.ico", (req, res) => {
    res.sendStatus(204);
  })
  .get("/images/icons/gear.png", (req, res) => {
    res.sendStatus(204);
  });

module.exports = router;
