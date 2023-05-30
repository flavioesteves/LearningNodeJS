const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const _ID = "6474d33e5cfe77b4c566db05";

app.use((req, res, next) => {
  User.findById(_ID)
    .then(user => {
      req.user = user;
      next();
    }).catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(result => {
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: "Mac",
        email: "mac@m.com",
        cart: { items: [] }
      });
      user.save();
    }
  });
  app.listen(3000);
  console.log("Init Server")
}).catch(err => {
  console.log(err);
});

