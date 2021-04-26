/* eslint-disable no-console */

const express = require('express');
const path = require('path');

const app = express();
const port = '8080';
const authJSAssets = path.resolve(path.dirname(require.resolve('@okta/okta-auth-js')), '..', '..', 'build/dist');

console.log('Login Redirect URI: /login/callback');
app.get('/login/callback', function(req, res, next) {
  req.url = '/';
  next();
});

app.use(express.static('./public')); // app html
app.use(express.static(authJSAssets)); // okta-auth-js assets

app.listen(port, function () {
  console.log(`Test app running at http://localhost:${port}!\n`);
});
