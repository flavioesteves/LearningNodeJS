const path = require('path');

const express = require('express');


// PRE Section 7
// const rootDir = require('../util/path');
// const adminData = require('./admin')

// Section 7
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;