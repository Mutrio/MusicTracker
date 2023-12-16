const router = require("express").Router(),
  homeController = require("../controllers/homeController");

router.get("/", homeController.home);

module.exports = router;