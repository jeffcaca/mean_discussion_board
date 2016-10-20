var mongoose = require('mongoose');
var Schema = mongoose.Schema
var TopicSchema = new Schema({
	username: {type: String},
	topicname: String,
	description: String,
	category: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	posts: Number,
	date: { type: Date, default: Date.now }
})
mongoose.model('Topic', TopicSchema)