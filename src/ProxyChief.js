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
const { exec } = require("child_process");

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
    '<style>*{font-family: sans-serif;background-color:black;color:aqua;}</style><center><h1>ProxyChief</h1><hr/><h2>HTTP & HTTPS Proxy. <br/>More protocols, coming soon.</h2><hr/><h3>Proxy Format: <b><a href="/@/example.com">/@/https://youngchief.tk/</a></b></h3><hr><p><strong>This proxy is made to be the very best, and is super lightweight, secure, and speedy.<br/><a href="https://github.com/youngchief-btw/ProxyChief">Want to see the GitHub?</a></strong><br/><strong>Access ProxyChief using any of these <a href="https://github.com/youngchief-btw/ProxyChief/blob/master/ListOfInstances.txt">URLs</a></strong></p><hr/><strong>Made by <a href="/@/https://youngchief.tk/">youngchief btw ツ</a>, with ❤️</strong></center>'
  );
});

app.listen(process.env.PORT);

setInterval(async function() {
	// Self-updating
	exec("git pull && git fetch", (error, stdout, stderr) => {
		if (error) {
			console.log(`${error.message}`);
			return;
		}
		if (stderr) {
				console.log(`${stderr}`);
				return;
		}
		console.log(`${stdout}`);
	});
}, 21600000)
