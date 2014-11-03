var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET exercises listing. */
router.get('/', function(req, res) {
	mongoose.model('solutions').find(function(err, solutions){
		res.send(solutions);
	});
});

/* GET exercises listing. */
router.get('/generate-solutions', function(req, res) {
	var result_solutions_with_P = [];

	mongoose.model('solutions').find(function(err, solutions){
		solutions.forEach(function(solution){
			mongoose.model('participants').find({participant_id: solution.participant_id}, function(err, participants){
				solution.participant = participants;
				result_solutions_with_P.push(solution);

				if (result_solutions_with_P.length ==  solutions.length) {
					var result_solutions_with_SD = [];

					result_solutions_with_P.forEach(function(solution){
						mongoose.model('documents').find({document_id: solution.sol_doc_id}, function(err, documents){
							solution.sol_doc = documents;
							result_solutions_with_SD.push(solution);
							if (result_solutions_with_SD.length ==  solutions.length) {
								var result_solutions_with_RD = [];

								result_solutions_with_SD.forEach(function(solution){
									mongoose.model('documents').find({document_id: solution.rev_doc_id}, function(err, documents){
										solution.rev_doc = documents;
										result_solutions_with_RD.push(solution);
										if (result_solutions_with_RD.length ==  solutions.length) {
											res.send(result_solutions_with_RD);
										}
									});
								});
							}
						});
					});
				}
			});
		});

	});
});

router.get('/:solution_id', function(req, res) {
	mongoose.model('solutions').find({solution_id: req.params.solution_id}, function(err, solutions){
		res.send(solutions);
	});
});


module.exports = router;