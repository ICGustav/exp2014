var express = require('express');
var router = express.Router();
var myData = require('./myData.json');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', myData);
  // res.send('Working allright...',200);
  console.log(myData);
});


module.exports = router;
