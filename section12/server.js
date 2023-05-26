const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mongoConnect = require("./util/database").mongoConnect;
const bodyParser = require("body-parser");
const path = require("path");
const User = require("./models/user");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const _ID = "6471177d57cb324f2f547ad4";

app.use((req, res, next) => {
  User.findById(_ID)
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    }).catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
mongoConnect(() => {
  app.listen(3000);
});

