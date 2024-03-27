const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const port = 3000;

server.listen(port, function () {

console.log('Webserver is running %d', port);
});

app.use(express.static(__dirname + '/docs'));