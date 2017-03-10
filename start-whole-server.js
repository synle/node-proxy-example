var port = '9001';
var proxyUrl = 'http://127.0.0.1:8000';

var httpProxy = require('http-proxy');
var fs = require('fs');

var proxyOptions = {
    target: proxyUrl
};

var proxy = httpProxy.createProxyServer(proxyOptions); // See (†)

httpProxy.createServer(proxyOptions)
    .listen(port);

console.log('proxy', proxyUrl);
console.log('listen to port', port);


