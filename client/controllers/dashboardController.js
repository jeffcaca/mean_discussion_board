app.controller('dashboardController', ['$scope', 'userFactory','topicFactory', "$location", function($scope, userFactory, topicFactory, $location){
	
	$scope.newTop = {}


	//creates a new Topic 
	$scope.newTopic = function(){
		$scope.newTop.username = $scope.currentUser.name
		$scope.newTop._user = $scope.currentUser._id
		$scope.newTop.posts = 0
	
		topicFactory.newTopic($scope.newTop, function(returnedTopic){
			console.log(returnedTopic)
			$location.url('/dashboard/')
			$scope.newTop = {}
		})
	}

	// view function which retrieves all the topics
	topicFactory.getTopics(function(returnedTopics){
		$scope.topics = returnedTopics;
	})

	// checks to see if user is in session if not redirects them to login
	userFactory.checkUser(function(data){
		$scope.currentUser = data.user;
		if(!$scope.currentUser){
			$location.url('/')
		}
	})

	}]);
		