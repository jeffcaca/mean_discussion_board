var mongoose = require('mongoose');
var Schema = mongoose.Schema
var PostSchema = new Schema({
	username: String,
	description: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	upvote: Number,
	downvote: Number,
	date: { type: Date, default: Date.now }
	
})
mongoose.model('Post', PostSchema)