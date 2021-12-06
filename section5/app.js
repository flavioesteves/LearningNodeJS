//### Core pkg ###
const http = require('http');
//### 3rd party pkg ###
const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();

app.set('view engine', 'pug');//Setting the Template Engine
app.set('views','views');//Setting the directory where to find the templates

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((request, response, next) => {
    // response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    response.status(404).render('404');
});

app.listen(3000);

//Same as above
//const server = http.createServer(app);
//server.listen(3000);
