//### Core pkg ###
const http = require('http');
//### 3rd party pkg ###
const express = require('express');

const app = express();
app.use((request, response, next) => {
    console.log('Middleware 1');
    next(); //Allows the request to continue to the next middleware in line
});

app.use((request, response, next) => {
    console.log('Middleware 2');
    response.send('<h1>Hello from Express</h1>')
});

const server = http.createServer(app);
server.listen(3000);