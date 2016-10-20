app.factory('postFactory', ["$http", "$location", function($http, $location){
	var factory={}
		factory.newPost = function(post, callback){
			$http.post('/newpost', post).then(function(returnedPost){
				callback(returnedPost.data)
			})
		}
		factory.newComment = function(comment, callback){

			$http.post('/newcomment', comment).then(function(returnedComment){
				callback(returnedComment.data)
			})
		}
		factory.getPosts = function(topicid, callback){

			$http.get('/getposts/' + topicid).then(function(returnedPosts){
				callback(returnedPosts.data)
			})
		}
		factory.upVote = function(id, callback){
			$http.put('/upvote/' + id).then(function(returnedUpVote){
				callback(returnedUpVote.data)

			})
		}
		factory.downVote = function(id, callback){
			$http.put('/downvote/' + id).then(function(returnedDownVote){
				callback(returnedDownVote.data)
			})
		}
	return factory;
}])