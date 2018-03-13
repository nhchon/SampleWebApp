(function(angular) {
  var app = angular.module("homeView", []);
  app.controller("homeController", function($scope) {
    $scope.login = function() {
      var wData = { name: $scope.userName, password: $scope.pwd }

      $.ajax({
        url: '/api/login/',
        type: 'POST',
        data: JSON.stringify(wData),
        contentType: "application/json;charset=utf-8",
        success: function(data) {
          if (data.result == "pass") {
            window.location.href = '/user';
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert('Status: ' + xhr.status + ', Error thrown: ' + thrownError);
        }
      });
    }
  });
})(window.angular)
