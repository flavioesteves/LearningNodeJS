const fs = require('fs');

const requestHandler = (request, response) => {

    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter a Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</buttom></form></body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, error => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }

    // console.log(request);
    console.log(request.url, request.method, request.headers);
    // process.exit(); //this function quit the process is not usually to be used 
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Some Random Text</h1></body>');
    response.write('</html>');
    response.end();
};

module.exports = {
    handler:requestHandler,
    someText: 'Some Random Text'
}

/**
 * Or cam be exported
 * module.exports.handler = requestHandler;
 * module.exports.someText = 'Some Random Text';
 * 
 * OR NodeJS shortcut
 * 
 * exports.handler =...
 * exports.smoText =...
 */