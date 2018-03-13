(function(homeController) {
  homeController.init = function(app) {
    app.get("/", function(req, res) {
      res.render("home", { title: "User Management" });
    });

    app.get("/user", function(req, res) {
      res.render("user", { title: "User Management" });
    });

    // register
    app.get("/register", function(req, res) {
      res.render("register", { title: "User Management" });
    });
  }
})(module.exports)
