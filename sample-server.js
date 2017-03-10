var http = require('http');

var port = '8000';

var server = http.createServer(function (req, res) {
    console.log('Received DAT from Proxy', req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Responded from the proxy : Hello World\n");
}).listen(port);

// Put a friendly message on the terminal
console.log("Server running at", port);
