const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image_url = imageUrl;
    this._id = id ? new mongodb.ObjectId({ id }) : null;
    this.user_id = userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      //update the product

      const prodID = new mongodb.ObjectId(this._id);
      dbOp = db.collection("products").updateOne({ _id: prodID }, { $set: this });
    } else {
      // inser new product
      dbOp = db.collection("products").insertOne(this)
    }

    return dbOp.then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  static fetchAll() {
    const db = getDb()
    return db.collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      }).catch(err => {
        console.log(err);
      });
  };

  static findById(prodId) {
    const db = getDb();
    const id = new mongodb.ObjectId(prodId);
    return db.collection("products").find({ _id: id }).next().then(
      product => {
        console.log(product);
        return product;
      }
    ).catch(err => {
      console.log(err)
    })
  }

  static deleteByID(prodId) {
    const db = getDb();
    const id = new mongodb.ObjectId(prodId);
    return db.collection("products").deleteOne({ _id: id }).then(result => {
      console.log("Deleted");
    }).catch(err => {
      console.log(err);
    });
  }

}

module.exports = Product;
