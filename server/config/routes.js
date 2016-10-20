var path = require('path')
var users = require('./../controllers/users.js')
var topics = require('./../controllers/topics.js')
var posts = require('./../controllers/posts.js')

module.exports = function(app){
	app.post('/login', function(req, res){
		users.login(req, res)
	})
	app.get('/checkUser', function(req, res){
		users.checkUser(req, res)
	})
	app.get('/logout', function(req, res){
		users.logout(req, res)
	})
	app.get('/getuser/:id', function(req, res){
		users.getUser(req, res)
	})
	app.post('/newtopic', function(req, res){
		topics.newTopic(req, res)
	})
	app.get('/gettopics', function(req, res){
		topics.getTopics(req, res)
	})
	app.get('/gettopic/:id', function(req, res){
		topics.getTopic(req, res)
	})
	app.post('/newpost', function(req, res){
		posts.newPost(req, res)
	})
	app.get('/getposts/:id', function(req, res){
		posts.getPosts(req, res)
	})
	app.post('/newcomment', function(req, res){
		posts.newComment(req, res)
	})
	app.put('/upvote/:id', function(req, res){
		posts.upVote(req, res)
	})
	app.put('/downvote/:id', function(req, res){
		posts.downVote(req, res)
	})
}