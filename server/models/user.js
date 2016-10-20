var mongoose = require('mongoose');
var Schema = mongoose.Schema
var UserSchema = new Schema({
	name: {type: String},
	usertopics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	userposts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	usercomments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
})
mongoose.model('User', UserSchema)