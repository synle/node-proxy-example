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
            // redirect
            // You can define here your custom logic to handle the request
            // and then proxy the request.
            proxy.web(req, res, options);
        } else {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Responded from the Web Itself : Hello World\n");
        }
    })
    .listen(port);


console.log('proxy', proxyUrl);
console.log('listen to port', port);


