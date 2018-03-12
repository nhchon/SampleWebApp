(function (angular) {
  var app = angular.module("userView", [])
  app.controller("userController", function($scope) {
    $scope.users = [
      { name: 'Anu Jose', email: 'anu@test.com', location: 'India'},
      { name: 'Paul Mathew', email: 'paul@yahoo.com', location: 'US'},
      { name: 'Krishna', email: 'kk@domain.com', location: 'India'}
    ];
  });
})(window.angular)
