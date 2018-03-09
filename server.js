'use strict';
var http = require('http');
// processing POST parameters
var bodyParser = require('body-parser');
// File processing
var fs = require("fs");
var express = require("express");
var port = process.env.PORT || 8888;

var app = express();
app.set('view engine', 'vash');
app.use(express.static(__dirname + "/resources"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var server = http.createServer(app);
server.listen(port);

app.get("/", function (req, res) {
    res.render("login", { title: "User Management" });
});

app.get("/register", function (req, res) {
    res.render("register", { title: "User Management" });
});

app.post("/register", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.password1;
    var confirmPwd = req.body.password2;

    if (pwd == confirmPassword) {
        var data = { name: name, email: email, password: pwd };
        fs.writeFile("user.json", JSON.stringify(data), "utf8", null);
        res.render("home", { title: "User Management" });
    } else {
        res.render("register", { title: "User Management" });
    }
});