app.factory('topicFactory', ["$http", "$location", function($http, $location){
	var factory={}

		factory.newTopic = function(topic, callback){
			
			$http.post('/newtopic', topic).then(function(returnedTopic){
				callback(returnedTopic.data)
			})
		}
		factory.getTopics = function(callback){
			$http.get('/gettopics').then(function(returnedTopics){
				callback(returnedTopics.data)
			})
		}
		factory.getTopic = function(id, callback){

			$http.get('/gettopic/' + id).then(function(returnedTopic){
				console.log(returnedTopic.data)
				callback(returnedTopic.data)
			})
		}
	return factory;
}])