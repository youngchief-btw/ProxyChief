/*
 * ProxyChief
 * © 2020 youngchief btw ツ, All rights reserved.
 */
const https = require("https");
const http = require("http");
const fs = require("fs");
const Unblocker = require("unblocker");
const unblocker = Unblocker({});
const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
// var proxy = httpProxy.createProxyServer({});

function miniCPU() {
  // This function lowers memory, disk, and CPU on request
  process.exit();
  process.kill();
  process.abort();
}

// this must be one of the first app.use() calls and must not be on a subdirectory to work properly
app.use(new Unblocker({ prefix: "/@/" }));
app.get("/@/", function(req, res) {
  miniCPU();
});

app.get("/", function(req, res) {
  res.send(
    '<style>*{font-family: sans-serif;}</style><h1>ProxyChief</h1>Proxy Format: <b>/@/SITE-TO-VISIT</b><hr><p><strong>Made by <a href="https://github.com/youngchief-btw">youngchief btw ツ</a>, with ❤️</strong></p><hr><p><strong>This proxy is made to be the very best, and is super lightweight.</strong></p><hr><p><strong><em>Access using any of these <a href="https://github.com/youngchief-btw/ProxyChief/blob/master/ListOfInstances.txt">URLs</a></em></strong></p>'
  );
});

app.listen(8080);
