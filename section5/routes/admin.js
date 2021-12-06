const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',(request, response, next) => {
    // response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    response.render('add-product',{pageTitle: 'Add Product'});
});

// /admin/add-product => POST
router.post('/add-product', (request,response) => {
    console.log(request.body);
    products.push({title: request.body.title});
    response.redirect('/');
});

exports.routes = router;
exports.products = products;