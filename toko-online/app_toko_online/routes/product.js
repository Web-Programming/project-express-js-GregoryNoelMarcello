var express = require("express");
var router = express.Router();
var productController = require("../controllers/ControllerProducts");

router.get("/apiall", productController.apiAll);
router.get("/all",productController.index)
router.get("/:id", productController.detail);

module.exports = router;
