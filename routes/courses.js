var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET courses listing. */
router.get('/', function(req, res) {

	var result_courses_with_E = [];

	mongoose.model('courses').find(function(err, courses){
		courses.forEach(function(courseE){
			mongoose.model('exercises').find({course_id: courseE.course_id}, function(err, exercises){
				courseE.exercises = exercises;
				result_courses_with_E.push(courseE);

				if (result_courses_with_E.length ==  courses.length) {

					var result_courses_with_P = [];

					result_courses_with_E.forEach(function(courseP){
						mongoose.model('participants').find({course_id: courseP.course_id}, function(err, participants){
							courseP.participants = participants;
							result_courses_with_P.push(courseP);
							if (result_courses_with_P.length ==  courses.length) {
								res.send(result_courses_with_P);
							}
						});
					});
				}
			});
		});

	});

});

router.get('/:courseId', function(req, res) {
	mongoose.model('courses').find({courseId: req.params.courseId}, function(err, courses){
		mongoose.model('courses').populate(courses, {path: 'courseId'}, function(err, courses){
				res.send(courses);	
		});	
	});
});


module.exports = router;