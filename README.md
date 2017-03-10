# node-proxy
=========


## To use change the host accordingly
==========================================
```
// Port for proxy
var port = '9001';

// url to proxy
var proxyUrl = 'https://yourInstance.salesforce.com/services/data/';
```


## To start the proxy
==========================================
```
npm start
```



## Generate self-signed certs for SSL (https)
==========================================
Source:
https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
https://devcenter.heroku.com/articles/ssl-certificate-self

To generate new certificate, use this command
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```
