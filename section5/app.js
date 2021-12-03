//### Core pkg ###
const http = require('http');
//### 3rd party pkg ###
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);

//Same as above
//const server = http.createServer(app);
//server.listen(3000);
