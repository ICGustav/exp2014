var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET posts listing. */
router.get('/', function(req, res) {
	mongoose.model('posts').find(function(err, posts){
		res.send(posts);		
	});
});

router.get('/:userId', function(req, res) {
	mongoose.model('posts').find({userId: req.params.userId}, function(err, posts){
		mongoose.model('posts').populate(posts, {path: 'userId'}, function(err, posts){
				res.send(posts);	
		});	
	});
});


module.exports = router;