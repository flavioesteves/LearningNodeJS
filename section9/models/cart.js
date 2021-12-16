const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (error, fileContent) => {
            let cart = {products:[], totalPrice:0};
            if (!error) {
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id:id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p,JSON.stringify(cart), err => {
                console.log(err)
            });
        });
        // Add new product/ increase quantity
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (error, fileContent) => {
            if(error) {
                return;
            };
            const cart =  JSON.parse(fileContent);
            const updatedCart =  {...cart};
            const product = updatedCart.products.find(prod => prod.id === id);
            if(!product) {
                return;
            }
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), err => {

                if (!err) {
                  // remove the item of the cart
                }
                console.log(err);
              });
        });
    }

    static getCart(callback) {
        fs.readFile(p, (error, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(error) {
                callback(null);
            } else {
            callback(cart);
            }
        });
    }

}