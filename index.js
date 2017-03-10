var http = require('http');
var httpProxy = require('http-proxy');
var fs = require('fs');


//
var port = '9001';
// var proxyUrl = 'https://yourInstance.salesforce.com/services/data/';
var proxyUrl = 'http://127.0.0.1:8000';

var options = {
    // ssl: {
    //     key: fs.readFileSync('server-ssl.key', 'utf8'),
    //     cert: fs.readFileSync('server-ssl.crt', 'utf8')
    // },
    target: proxyUrl
};

var proxy = httpProxy.createProxyServer(options); // See (†)


// httpProxy.createServer(options)

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
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

proxy.on('error', function(e) {
  console.log('ERROR: ', e);
});


console.log('proxy', proxyUrl);
console.log('listen to port', port);


