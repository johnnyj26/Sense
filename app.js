var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session'); //如果要使用session，需要单独包含这个模块
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var RedisStore = require('connect-redis')(session);

var app = express();
app.use(express.static(__dirname));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// 设置 Session
app.use(session({
  store: new RedisStore({
    host: "127.0.0.1",
    port: 6379,
    ttl: 60*1000*30
  }),
  cookie: {maxAge: 60*1000*30 },
  resave:false,
  saveUninitialized:false,
  secret: 'sense'
}))

// app.use(function (req, res, next) {
//   req.sessionOptions.maxAge = 1800000;
// });
app.use(express.static(path.join(__dirname, 'public')));

// error handlers

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

// ==========路由配置==========
var sRegist=require('./routes/user/regist');
sRegist(app,__dirname);
var sLogin=require('./routes/user/login');
sLogin(app,__dirname);
var sIndex=require('./routes/index/index');
sIndex(app,__dirname);
// ==========路由配置==========

// ==========监听==========
app.listen(6080,"127.0.0.1");
console.log('Web server has started on http://127.0.0.1:6080/');
// ==========监听==========

module.exports = app;









