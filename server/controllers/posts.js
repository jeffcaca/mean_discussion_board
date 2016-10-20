var mongoose = require('mongoose')
var User = mongoose.model('User')
var Post = mongoose.model('Post')
var Topic = mongoose.model('Topic')
var Comment = mongoose.model('Comment')
module.exports = (function(){
	return{
			// Creates a new post and then pushes that post into users posts array and finally updates the topic.post count
			newPost: function (req, res){
				console.log(req.body._topic)
				var post = new Post(req.body)
				User.findOne({_id: req.body._user}, function(err, user){
					if(err){
					 console.log(err)
						}
					else{
								user.userposts.push(post)
								post.save(function(err){
									if(err){
										console.log(err)
									}
									else{
										user.save(function(err, post){
											if (err){
												console.log(err)
											}
											else{
												Topic.findOne({_id: req.body._topic}, function(err, topic){
													if(err){
														console.log(err)
													}
													else{
														topic.posts += 1;
														topic.save(function (err, topic){
															if (err){
																console.log(err)

															}
															else{
																res.json(topic)
															}
														})
													}
												})
											}
										})
										
									}
								})
						}	
				})

			},

			// upvotes the post
			upVote: function(req, res){
				
				Post.findOne({_id: req.params.id}, function(err, post){
					if(err){
						console.log(err)
					}
					else{
						post.upvote +=1
						post.save(function (err, post){
							if(err){
								console.log(err)
							}
							else{
								res.json(post)
							}
						})
					}
				})
			},

			//downvotes the post
			downVote: function(req, res){
				console.log(req.params.id)
				Post.findOne({_id: req.params.id}, function(err, post){
					if(err){
						console.log(err)
					}
					else{
						post.downvote +=1
						post.save(function (err, post){
							if(err){
								console.log(err)
							}
							else{
								res.json(post)
							}
						})
					}
				})
			},

			// creates a new comment and then pushes that comment into users comments array and then finally pushes that comment into the post comments array
			newComment: function (req, res){
				console.log(req.body._user)
				console.log(req.body._post)
				var comment = new Comment(req.body)
				User.findOne({_id: req.body._user}, function(err, user){
					if(err){
					 console.log(err)
						}
					else{
								user.usercomments.push(comment)
								comment.save(function(err){
									if(err){
										console.log(err)
									}
									else{
										user.save(function(err, post){
											if (err){
												console.log(err)
											}
											else{
												Post.findOne({_id: req.body._post}, function(err, post){
													if(err){
														console.log(err)
													}
													else{
														post._comments.push(comment)
														post.save(function(err, post){
															if(err){
																console.log(err)
															}
																else{
																	res.json(post)
																}
														})
													}
												})
											}
										})
									
										
									}
								})
						}	
				})

			},

			//grabs all the posts for the given topic using the url parameters
			getPosts: function(req, res){
					Post.find({_topic: req.params.id}).populate('_comments').exec(function (err, posts){
						if (err){
							console.log(err)
						}
						else{
							res.json(posts)
						}
					})
			}
		
	}	
})(); //immediately invoked