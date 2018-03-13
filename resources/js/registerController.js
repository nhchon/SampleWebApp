(function(angular) {
  var app = angular.module("registerView", []);
  app.controller("registerController", function($scope) {
    $scope.register = function() {
      if ($scope.password1 == $scope.password2) {
        var wData = { name: $scope.userName, email: $scope.email, password: $scope.password1 };
        $.ajax({
          url: '/api/register/',
          type: 'POST',
          data: JSON.stringify(wData),
          contentType: "application/json;charset=utf-8",
          success: function(data) {
            if (data.result == "pass") {
              window.location.href = '/';
            }
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert("Statue: " + xhr.status + ", Error thrown: " + thrownError);
          }
        });
      } else {
        alert("Password and Confirm password should match");
      }
    };
  });
})(window.angular)
