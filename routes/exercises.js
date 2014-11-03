var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET exercises listing. */
router.get('/', function(req, res) {
	mongoose.model('exercises').find(function(err, exercises){
		res.send(exercises);
	});
});

/* GET exercises listing. */
router.get('/generate-exercises', function(req, res) {
	var result_exercises = [];

	mongoose.model('exercises').find(function(err, exercises){
		exercises.forEach(function(exercise){
			mongoose.model('solutions').find({exercise_id: exercise.exercise_id}, function(err, solutions){
				exercise.solutions = solutions;
				result_exercises.push(exercise);

				if (result_exercises.length ==  exercises.length) {
					res.send(result_exercises);
				}
			});
		});

	});
});

router.get('/:exercise_id', function(req, res) {
	mongoose.model('exercises').find({exercise_id: req.params.exercise_id}, function(err, exercises){
		res.send(exercises);	
	});
});


module.exports = router;