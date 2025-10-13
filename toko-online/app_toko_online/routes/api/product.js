const express = require('express');
const router = express.Router();
const controllerProducts = require('../../controllers/ControllerProducts');
const Product = require('../../models/products');

//url create - POST ()
router.post("/", controllerProducts.create);
//url read all - GET
router.get("/", controllerProducts.all);
//url read one - detail - GET
router.get("/:id", controllerProducts.detailproduk);
//url update - PUT
router.put("/:id", controllerProducts.update);
//url delete - DELETE
router.delete("/:id", controllerProducts.remove);

module.exports = router;