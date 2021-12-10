exports.getAddProduct = (request, response, next) => {
    // response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    response.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (request, response) => {
    console.log(request.body);
    products.push({
        title: request.body.title
    });
    response.redirect('/');
}