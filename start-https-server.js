var port = "9001";
var proxyUrl = "http://127.0.0.1:8000";
var keyPath = "./cert/key.pem";
var certPath = "./cert/cert.pem";

var https = require("https");
var httpProxy = require("http-proxy");
var fs = require("fs");

var proxy = httpProxy.createProxyServer({
  target: proxyUrl,
});

proxy.on("error", function (e) {
  console.log("PROXY ERROR: ", e);
});

// server itself
var server = https
  .createServer(
    {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    function (req, res) {
      var requestUrl = req.url;

      if (requestUrl.indexOf("/api") >= 0) {
        proxy.web(req, res, proxyOptions);
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Responded from the Web Itself : Hello World\n");
      }
    },
  )
  .listen(port);

console.log("proxy", proxyUrl);
console.log("listen to port", port);
