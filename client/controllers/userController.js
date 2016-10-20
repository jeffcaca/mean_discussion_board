app.controller('userController', ['$scope', 'userFactory', "$location", '$routeParams', function($scope, userFactory, $location, $routeParams){
	
	//login fuction with a basic validation 
	$scope.login = function(){
		if(!$scope.logReg||$scope.logReg.name.length <3){
			alert('name isnt 3 characters');
		}
		else {
			userFactory.login($scope.logReg);
			
		}
	}
	// view function which gets the user based off the url paramater id
	userFactory.getUser($routeParams.id, function(returnedUser){
		$scope.thisuser = returnedUser;
	})




}]);