const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/',(request, response, next) => {
    // console.log('Shop Products:', adminData.products);
    // response.sendFile(path.join(rootDir,'views', 'shop.html'));
    const products = adminData.products;
    response.render('shop', {prods:products, docTitle: 'Shop'});
});

module.exports = router;