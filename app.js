var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Database setup
//var databaseUrl = 'portfolioSiteDB';
var databaseUrl = 'mongodb://admin:1jVwEA3lZZxE@localhost/portfoliositejs';
var collections = ['projects', 'projectInfo'];
var db = require("mongojs").connect(databaseUrl, collections);
console.log("Got the DB connection");

// Mailer setup
var nodemailer = require('nodemailer');
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'conorsloansite@gmail.com',
        pass: 'passwd01'
    }
});


// JSON API
api = require('./routes/api')(db, transporter);
app.get('/api/projectinfo', api.projectInfo);
app.get('/api/projects', api.projects);
app.get('/api/project/:projectName', api.project);
app.all('/api/contact/sendMessage', api.sendMessage);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
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
