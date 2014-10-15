var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(req.query, 200);
  console.log(req.query);
});

router.get('/:id', function(req, res) {
  res.send(req.params, 200);
  console.log(req.params);
});

router.post('/', function (req, res) {
	console.log(req.query);
	res.send(200);
})

module.exports = router;
