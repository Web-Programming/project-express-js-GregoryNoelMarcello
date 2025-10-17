const express = require('express');
const router = express.Router();
const user = require('../../controllers/user');

// Wire routes to controller middleware
router.post('/', user.create);
router.get('/', user.all);
router.get('/:id', user.detailUser);
router.put('/:id', user.update);
router.delete('/:id', user.remove);

module.exports = router;
