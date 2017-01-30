var port = '9001';
var proxyUrl = 'https://yourInstance.salesforce.com/services/data/';

var httpProxy = require('http-proxy');
var fs = require('fs');

var options = {
    // ssl: {
    //     key: fs.readFileSync('server-ssl.key', 'utf8'),
    //     cert: fs.readFileSync('server-ssl.crt', 'utf8')
    // },
    target: proxyUrl
};


httpProxy.createServer(options)
    .listen(port);

console.log('proxy', proxyUrl);
console.log('listen to port', port);


