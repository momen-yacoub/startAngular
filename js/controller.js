var app = angular.module('mainApp', ['ui.router']);

app.controller("homeCtr", function ($scope, $http) {
  $http.get("https://api.github.com/users")
  .success(function(response) {
        $scope.userData = response;
        $scope.curUser = response[0];
        $scope.name = "momen";
  });



  $scope.userClick = function(newUser) {
     $scope.curUser = newUser;
     //$scope.$apply();
  };

  $scope.limit= 5;
  $scope.loadMore = function() {
	  $scope.limit = $scope.limit  + 5;
 //	$scope.$apply();
  };
});
