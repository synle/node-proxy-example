# node-proxy

## To use change the host accordingly
```
// Port for proxy
var port = '9001';

// url to proxy
var proxyUrl = 'https://yourInstance.salesforce.com/services/data/';
```


## To start the proxy
```
npm start
```



## Generate self-signed certs for SSL (https)
Source:
https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
https://devcenter.heroku.com/articles/ssl-certificate-self
https://askubuntu.com/questions/73287/how-do-i-install-a-root-certificate

To generate new certificate, use this command
```
#https://devcenter.heroku.com/articles/ssl-certificate-self
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
openssl rsa -passin pass:x -in server.pass.key -out server.key
openssl req -new -key server.key -out server.csr
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
```
