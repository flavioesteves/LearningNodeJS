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
    //const cartProduct = this.cart.items.findIndex(cp => {
    //  return cp._id === product._id;
    //});

    const updatedCart = { items: [{ productId: new ObjectId(product._id), quantity: 1 }] }
    const db = getDb();
    db.collection("users").updateOne({ _id: new ObjectId(this._id) },
      { $set: { cart: updatedCart } }
    );

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
