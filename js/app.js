var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider)  {
	$urlRouterProvider.otherwise('/users');

	$stateProvider
	.state('home',{
		url: '/users',
		controller: "homeCtr",
		templateUrl: '/partial/user.html'
	})

	.state('user',{
		url: '/user/:id',
		controller: "homeCtr",
		templateUrl: '/partial/user.html',
	});

});


app.controller("homeCtr", function ($scope, $http, $state, $stateParams) {
	console.log($state.current.name);

	  if($state.current.name == "home"){
	      	$state.go('user' , {id: 1});
	  }

  	  $http.get("https://api.github.com/users")
 	    .success(function(response) {
	      $scope.userData = response;
	      $scope.name = "momen";
 	    });

  	    $http.get("https://api.github.com/user/"+$stateParams.id)
 	    .success(function(response) {
	      $scope.curUser = response;

 	    }).error(function (error){
 	    	$state.go('user' , {id: 1});
 	    });

  $scope.userClick = function(newUser) {
     $scope.curUser = newUser;
     $scope.$apply();
  };

  $scope.limit= 5;
  $scope.loadMore = function() {
	  $scope.limit = $scope.limit  + 5;
 //	$scope.$apply();
  };
});


