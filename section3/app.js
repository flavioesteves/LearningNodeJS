const http = require('http');
const routes = require('./routes');


console.log(routes.someText);
// //Declaration of the functions
// function requestListener(request, response) { }
// http.createServer(requestListener);

// //Anonymous Functions - most common in node.js
// http.createServer(function(request, response){});

// Arrow function
const server = http.createServer(routes.handler);
server.listen(3000);

