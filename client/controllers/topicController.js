app.controller('topicController', ['$scope', 'userFactory','topicFactory', "$location", "$routeParams", 'postFactory', function($scope, userFactory, topicFactory, $location, $routeParams, postFactory){
	

 	$scope.sortType = "date";
    $scope.sortReverse = true;

	// Creates a new post. 

	$scope.newPost = function(){
		
		$scope.newPo.username = $scope.currentUser.name
		$scope.newPo._user = $scope.currentUser._id
		$scope.newPo._topic = $routeParams.id
		$scope.newPo.upvote = 0
		$scope.newPo.downvote = 0
		postFactory.newPost($scope.newPo, function(returnedPost){
			
			location.reload(true) // $location.url('/topics/' + $routeParams.id) was not working this was a fix
		})
	}
	// Upvotes a post

	$scope.upVote = function(id){
		$scope.upVote = id
		postFactory.upVote($scope.upVote, function(returnedupVote){
			location.reload(true) // $location.url('/topics/' + $routeParams.id) was not working this was a fix
		})

	}
	// Downvotes a post
	$scope.downVote = function(id){
		$scope.downVote = id
		postFactory.downVote($scope.downVote, function(returnedDownVote){
			location.reload(true) // $location.url('/topics/' + $routeParams.id) was not working this was a fix
		})

	}
	// creates a new comment. $scope.newComm set to an empty object so the view does not decide the $scope (ng-repeat complicates things)
	$scope.newComm = {}
	$scope.newComment = function(id){
		
		$scope.newComm[id]._post = id
		$scope.newComm[id].name = $scope.currentUser.name 
		$scope.newComm[id]._user = $scope.currentUser._id 
		postFactory.newComment($scope.newComm[id], function(returnedPost){
		
			location.reload(true) // $location.url('/topics/' + $routeParams.id) was not working this was a fix
		})
	}
	// view function which grabs all of the topics
	topicFactory.getTopic($routeParams.id, function(returnedTopics){
		$scope.topic = returnedTopics;
	})
	// view function which grabs all of the posts and comments (using .populate)
	postFactory.getPosts($routeParams.id, function(returnedPosts){
		$scope.posts = returnedPosts;
	})
	// checks to see if user is in session if not redirects them to login
	userFactory.checkUser(function(data){
		$scope.currentUser = data.user;
		if(!$scope.currentUser){
			$location.url('/')
		}
	})

	}]);
		