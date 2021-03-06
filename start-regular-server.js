var http = require('http');
var httpProxy = require('http-proxy');

var port = '9001';
var proxyUrl = 'http://127.0.0.1:8000';

var proxyOptions = {
    target: proxyUrl
};

var proxy = httpProxy.createProxyServer(proxyOptions); // See (†)
proxy.on('error', function(e) {
    console.log('PROXY ERROR: ', e);
});



// server itself
var server = http.createServer(function(req, res) {
        var requestUrl = req.url;

        if(requestUrl.indexOf('/api') >= 0){
            proxy.web(req, res, proxyOptions);
        } else {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Responded from the Web Itself : Hello World\n");
        }
    })
    .listen(port);


console.log('proxy', proxyUrl);
console.log('listen to port', port);


