/**
    模块依赖
*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose')

// 链接mogondb
//var connect = function () {
//  var options = { server: { socketOptions: { keepAlive: 1 } } };
//  mongoose.createConnection('mongodb://127.0.0.1:27017/news', options);
//};
//
//connect();
//
//mongoose.connection.on('error', console.log);
//mongoose.connection.on('disconnected', connect);
//

//路由设置
var routes = require('./routes/index');
var users = require('./routes/users');


//express 实例化
var app = express();

// 变量设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 路由的 port设置
app.set('port' , process.env.PORT || 3000 );

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app) ;
/*
    设置路由
    app.use('/', routes);
    app.use('/users', users);
*/
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//设置路由
module.exports = app;
