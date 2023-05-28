const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; //{items:[]}
    this._id = id;
  }


  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection("users").updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp.collection("users").insertOne(this);
    }
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({ productId: new ObjectId(product._id), quantity: newQuantity });
    }

    const updatedCart = {
      items: updatedCartItems,
    }

    const db = getDb();
    db.collection("users").updateOne({ _id: new ObjectId(this._id) },
      { $set: { cart: updatedCart } }
    );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map(i => {
      return i.productId;
    });
    return db.collection("products")
      .find({ _id: { $in: productIds } })
      .toArray()
      .then(products => {
        return products.map(item => {
          return {
            ...item, quantity: this.cart.items.find(i => {
              return i.productId.toString() === item._id.toString();
            }).quantity
          };
        });
      });
  }

  static findById(userId) {
    const db = getDb();
    const id = new mongodb.ObjectId(userId);
    return db.collection("users").find({ _id: id }).next()
      .then(
        user => {
          console.log(user);
          return user;
        })
      .catch(err => {
        console.log(err);
      });
  }

}

module.exports = User;