
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');
var courses = require('./routes/courses');
var exercises = require('./routes/exercises');
var solutions = require('./routes/solutions');
var mongoose = require('mongoose'); 
var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));

// load all mongoose models from models folder
fs.readdirSync(__dirname + '/models').forEach(function (filename) {
    if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});

app.use('/', routes);
// app.use('/users', users);
// app.use('/posts', posts);
app.use('/courses', courses);
app.use('/exercises', exercises);
//app.use('/documents', documents);
// app.use('/participants', participants);
app.use('/solutions', solutions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    // connection to MongoDB with myApp DB
    // mongoose.connect('mongodb://127.0.0.1/myApp');
        // connection to MongoDB with sqool_export DB
    mongoose.connect('mongodb://127.0.0.1/sqool_export');
    // catch errors
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
