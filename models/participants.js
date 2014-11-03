var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var participantsSchema = new Schema({
	courses: {
		type: Number,
		ref: 'courses'
	},
	participant_id: Number,
	participant_firstname: String,
	participant_lastname: String,
	participant_loginname: String
});

mongoose.model('participants', participantsSchema);