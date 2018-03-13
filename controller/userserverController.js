(function(userServerController) {
  var data = require("../data");

  userServerController.init = function(app) {
    // login
    app.post("/api/login/", function(req, res) {
      var userName = req.body.name;
      var pwd = req.body.password;

      data.getUsers(userName, function(err, users) {
        if (err) {
          return res.send(400, err);
        } else {
          res.set("Content-Type", "application/json");
          if (users) {
            if (users.password == pwd) {
              res.send(JSON.stringify({ result: "pass" }));
            }
          }
        }
      });
    });

    app.post("/api/register/", function(req, res) {
      var userName = req.body.name;
      var email = req.body.email;
      var pwd = req.body.password;

      var user = { name: userName, email: email, password: pwd }  ;

      data.add(user, function(err, dbresult) {
        if (err) {
          res.send(400, err);
        } else {
          res.set("Content-Type", "application/json");
          res.send(JSON.stringify({ result: "pass"}));
        }
      });
    });

    app.get("/api/users/:name", function(req, res) {
      var userName = req.params.name;
      data.getUsers(userName, function(err, users) {
        if (err) {
          res.send(400, err);
        } else {
          res.set("Content-Type", "application/json");
          res.send(users);
        }
      })
    });
  };
})(module.exports)
