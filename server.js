'use strict';
var http = require('http');
var express = require("express");
var port = process.env.PORT || 8888;

var app = express();
app.set('view engine', 'vash');
app.use(express.static(__dirname + "/resources"));
app.use

var server = http.createServer(app);
server.listen(port);

app.get("/", function (req, res) {
    res.render("index", { title: "Vash view" });
});

app.get("/emp/", function (req, res) {
    res.render("employee", { name: "Vishnu", designation: "IT Professional", location: "Hyderabad, India" });
});