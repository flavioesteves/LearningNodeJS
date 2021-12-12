const path = require('path');

const express = require('express');


// PRE Section 7
// const rootDir = require('../util/path');
// const adminData = require('./admin')

// Section 7
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);

module.exports = router;