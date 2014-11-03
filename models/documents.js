var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var documentsSchema = new Schema({
	document_id: Number,
	file_name: String,
	stored_file_name: String
});

mongoose.model('documents', documentsSchema);