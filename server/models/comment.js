var mongoose = require('mongoose');
var Schema = mongoose.Schema
var CommentSchema = new Schema({
	description: {type: String},
	name: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	date: { type: Date, default: Date.now }

})
mongoose.model('Comment', CommentSchema)