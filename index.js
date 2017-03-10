var https = require('https');
var httpProxy = require('http-proxy');
var fs = require('fs');
var express = require('express');


var port = '9001';
var proxyUrl = 'http://127.0.0.1:8000';
// var proxyUrl = 'https://yourInstance.salesforce.com/services/data/';

var proxyOptions = {
    target: proxyUrl
};

var proxy = httpProxy.createProxyServer(proxyOptions); // See (†)
proxy.on('error', function(e) {
    console.log('PROXY ERROR: ', e);
});

var serverOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};



app = express()

app.get('/', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Responded from the Web Itself : Hello World\n");
});


app.get('/api', function(req, res) {
    proxy.web(req, res, proxyOptions);
});


var server = https.createServer(serverOptions, app)
    .listen(port, function(){
        console.log('listen to port', port);
    });

