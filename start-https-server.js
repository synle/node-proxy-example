const port = "9001"; // 443 (https)
const proxyUrl = "http://127.0.0.1:8000";
const keyPath = "./cert/key.pem"; // "./server.key"
const certPath = "./cert/cert.pem"; // "./server.crt"

const https = require("https");
const httpProxy = require("http-proxy");
const fs = require("fs");

const proxy = httpProxy.createProxyServer({
  target: proxyUrl,
});

proxy.on("error", (e) => console.log("PROXY ERROR: ", e));

const server = https
  .createServer(
    {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    (req, res) => {
      const requestUrl = req.url;

      if (requestUrl.indexOf("/api") >= 0) {
        proxy.web(req, res);
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Responded from the Web Itself : Hello World\n");
      }
    }
  )
  .listen(port);

console.log("proxy", proxyUrl);
console.log("listen to port", port);
