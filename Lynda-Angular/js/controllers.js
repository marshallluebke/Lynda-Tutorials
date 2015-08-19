var myApp = angular.module('myApp', []);


// this is a controller that can be called in the html by using ng-controller="NameOfController". in this case it would be ng-conroller="MyController. adding $http gives us access to a way of injecting other files into our controllers"
myApp.controller('MyController', function MyController($scope, $http){

	//using $http we can .get our json file and on .success we can inject its contents into our $scope.artists using our property data. This makes it so you dont have to manually paste in all of the data from the .json file.
	//using a method like this while not running on a server will throw errors on Google Chrome because this is AJAX and AJAX wants have communication between a client and a server. This isn't happening unless you have this posted to a server.
	// You can run this code on a different browser and it'll work just fine
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		//this looks for artistOrder ng-model in our html and sets it's default value to 'name' so when the page loads it's already set to the name field 
		$scope.artistOrder = 'name';

	})
});