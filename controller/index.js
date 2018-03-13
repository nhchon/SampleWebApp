(function(controllers) {
  var homeController = require("./homeController");
  var userServerController = require("./userServerController");
  controllers.init = function(app) {
    homeController.init(app);
    userServerController.init(app);
  }
})(module.exports)
