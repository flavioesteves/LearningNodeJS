const express = require('express');

const router = express.Router();

router.get('/add-product',(request, response, next) => {
    // console.log('Middleware 1');
    response.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</input></form>');
});

router.post('/product', (request,response) => {
    console.log(request.body);
    response.redirect('/');
});

module.exports = router;