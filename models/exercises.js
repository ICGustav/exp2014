var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exercisesSchema = new Schema({
	exercise_id: Number,
	course_id: Number,
	citem_name: String,
	excercise_code: String,
	excercise_name: String,
	deadline_date: String,
	corrector_fn: String,
	corrector_ln: String,
	description: String,
	desc_note: String,
	assessment_note: String,
	revision_criteria: String,
	solutions: []
});

mongoose.model('exercises', exercisesSchema);