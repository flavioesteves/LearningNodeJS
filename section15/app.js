const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const errorController = require('./controllers/error');
const User = require('./models/user');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);


const MONGO_URI = "mongodb+srv://flavioafesteves:ndLMegmyDkZgaDv9@cluster0.8yzxk77.mongodb.net/";

dotenv.config();
const app = express();
const sessionStore = new MongoDBStore({
  uri: MONGO_URI,
  databaseName: "mongoose",
  collection: "sessions"
}, (error) => {
  console.log(error);
});

sessionStore.on("error", (error) => {
  console.log("sessionStore on: " + error);
})


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "my secret",
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));


const _ID = "64733e16b7d8a46253daba82";

app.use((req, res, next) => {
  if (!req.session.user) {
    console.log("Not session user");
    return next();
  }


  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      console.log("user:" + req.user);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);



mongoose
  .connect(process.env.MONGO_URL)
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Mac',
          email: 'mac@,.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
    console.log("Init Server")
  })
  .catch(err => {
    console.log(err);
  });
