var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var solutionsSchema = new Schema({
	solution_id: Number,
	exercise_id: Number,
	participant_id: Number,
	sol_doc_id: Number,
	rev_doc_id: Number,
	description: String,
	revision_assessment: String,
	participant:[],
	sol_doc: [],
	rev_doc:[]
});

mongoose.model('solutions', solutionsSchema);