const { response } = require('express');
const Product = require('../models/product')

exports.getProducts = (request,response, next) => {
    Product.fetchAll((products) => {
        response.render('shop/product-list', {
            prods: products,
            pageTitle: 'Products',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};

exports.getIndex = (request,response, next) => {
    Product.fetchAll((products) => {
        response.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
;}

exports.getCart = (request,response, next) => {
    response.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Cart'
    });
};

exports.getCheckout = (request, response, next) => {
    response.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};

exports.getOrders = (request,response, next) => {
    response.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    });
};