var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postsSchema = new Schema({
	content:String,
	userId: {
		type: Schema.ObjectId,
		ref: 'users'
	}
});

mongoose.model('posts', postsSchema);