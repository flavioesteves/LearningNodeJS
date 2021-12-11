const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

const products = [];

// #####################
// ### Pre Section 7 ###
// #####################
// // /admin/add-product => GET
// router.get('/add-product', (request, response, next) => {
//     // response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//     response.render('add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product',
//         formsCSS: true,
//         productCSS: true,
//         activeAddProduct: true
//     });
// });
// // /admin/add-product => POST
// router.post('/add-product', (request, response) => {
//     console.log(request.body);
//     products.push({
//         title: request.body.title
//     });
//     response.redirect('/');
// });

// ###################
// ### Section 7++ ###
// ###################
router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

exports.routes = router;
// exports.products = products;