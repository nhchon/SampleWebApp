'use strict';
var http = require('http');
// processing POST parameters
var bodyParser = require('body-parser');
// File processing
var fs = require("fs");
var express = require("express");
var port = process.env.PORT || 8888;

// Controllers
var controllers = require("./controller");

// MongoDB
var MongoClient = require("mongodb").MongoClient;
var URL = 'mongodb://localhost:27017/userdb';

var app = express();
app.set('view engine', 'vash');
app.use(express.static(__dirname + "/resources"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", function (req, res) {
    MongoClient.connect(URL, function (err, client) {
        if (err) return;
        const db = client.db('userdb')
        var collection = db.collection('user');
        collection.insert({ name: 'Mathew', Location: 'US' }, function (err, result) {
            collection.find({ name: 'Mathew' }).toArray(function (err, docs) {
                console.log(docs[0]);
                client.close();
            });
        });
    });
    res.render("register", { title: "User Management" });
});

app.get("/register", function (req, res) {
    res.render("register", { title: "User Management" });
});

app.post("/register", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.password1;
    var confirmPwd = req.body.password2;

    if (pwd == confirmPwd) {
        var data = { name: name, email: email, password: pwd };
        fs.writeFile("user.json", JSON.stringify(data), "utf8", null);
        res.render("home", { title: "User Management" });
    } else {
        res.render("register", { title: "User Management" });
    }
});

app.get("/user", function (req, res) {
    res.render("user", { title: "User Management" });
});

app.get("/index", function (req, res) {
    res.render("index", { title: "User Management" });
});


// initialize Controllers
controllers.init(app);

// start the server
var server = http.createServer(app);
server.listen(port);
