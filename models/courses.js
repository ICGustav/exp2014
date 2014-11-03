var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var coursesSchema = new Schema({
	course_id: Number,
	code: String,
	name: String,
	start_date: String,
	end_date: String,
	place_description: String,
	exercises: [],
	participants: []
});

mongoose.model('courses', coursesSchema);