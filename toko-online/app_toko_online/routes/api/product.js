const express = require('express');
const router = express.Router();
const controllerProducts = require('../../controllers/ControllerProducts');
const Product = require('../../models/products');

//url create - POST ()
router.post("/", controllerProducts.create);
//url read all - GET
router.get("/", controllerProducts.api);
//url read one - detail - GET
//url update - PUT
//url delete - DELETE