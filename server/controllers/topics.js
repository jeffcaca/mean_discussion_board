var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
module.exports = (function(){
	return{

			//creates a new topic and then pushes that topic into the users topics array
			newTopic: function (req, res){
				console.log(req.body._user)
				var topic = new Topic(req.body)
				User.findOne({_id: req.body._user}, function(err, user){
					if(err){
					 console.log(err)
						}
					else{
								user.usertopics.push(topic)
								topic.save(function(err){
									if(err){
										console.log(err)
									}
									else{
										user.save(function(err, topic){
											if (err){
												console.log(err)
											}
											else{
												res.json({topic: req.body})
											}
										})
										
									}
								})
						}	
				})

			},
			
			// gets all the topics
			getTopics: function(req, res){
				Topic.find(function(err, topics){
					if (err){
						console.log(err)
					}
					else{
						res.json(topics)
					}
				})
			},

			// gets one topic based of the url paramater
			getTopic: function(req, res){
				
			Topic.findOne({_id: req.params.id}, function(err, topic){
				if (err){
					console.log(err)
				}
				else{
					res.json(topic)
				}
			})
			},

	}	
})(); //immediately invoked