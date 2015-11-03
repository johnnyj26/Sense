var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session'); //如果要使用session，需要单独包含这个模块
var cookieParser = require('cookie-parser');
var RedisStore = require('connect-redis')(session);

var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname));

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

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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

// ====================mysql
var mysql=require("mysql");
var pool=mysql.createPool({
  host:'localhost',
  port:3306,
  database:'myp2p',
  user:'root',
  password:''
});
// ====================mysql

// ==========路由配置==========
app.get('/addLoanPage',function(req,res){
  res.sendfile(__dirname+"/views/mgt/addLoan.html");
});

app.post('/insertLoanMess',function(req,res){
  var Title=req.param("Title").toString();
  var Amount=parseInt(req.param("Amount").toString());
  var Rate=parseInt(req.param("Rate").toString());
  var Term_Count=parseInt(req.param("Term_Count").toString());
  var Repay_Type=parseInt(req.param("Repay_Type").toString());
  var Loan_Type=parseInt(req.param("Loan_Type").toString());
  var Description=req.param("Description").toString();
  var inputTime=new Date();

  pool.getConnection(function(err,connection){
    if(err){
      console.log("连接数据库失败！");
    }else{
      connection.query('insert into loan set ?',
        {
          amount:Amount,
          title:Title,
          annualInterestRate:Rate,
          termCount:Term_Count,
          repayType:Repay_Type,
          description:Description,
          loanType:Loan_Type,
          inputTime:inputTime,
          loanPortraitPath:"/pic/loan/default.jpg"
        },
        function(err,result){
          if(err){
            console.log("插入数据库失败！");
            connection.release();
            var regResult={result:0};
            res.send(JSON.stringify(regResult));
          }else{
            console.log("新用户插入成功！ID为:"+result.insertId);
            req.session.loanId=result.insertId;
            connection.release();
            var regResult={result:1};
            res.send(JSON.stringify(regResult));
          }
      });
    }
  });

});

app.post('/insertLoan',function(req,res){
  //生成multiparty对象，并配置下载目标路径
    var form = new multiparty.Form({uploadDir: __dirname+'/public/cache/loan/'});
    //下载后处理
    form.parse(req, function(err, fields, files) {
      var filesTmp = JSON.stringify(files,null,2);
      if(err){
        console.log('parse error: ' + err);
      } else {
        // console.log('parse files: ' + filesTmp);
        var inputFile = files.Loan_Pic[0];
        var uploadedPath = inputFile.path;
        var i=inputFile.originalFilename.lastIndexOf(".");
        var suffix=inputFile.originalFilename.substring(i);

        var dstPathMin = '/pic/loan/' + new Date().getTime()+suffix;
        var dstPath = __dirname+dstPathMin;

        //重命名为真实文件名
        fs.rename(uploadedPath, dstPath, function(err) {
          if(err){
            console.log('rename error: ' + err);
          } else {
            console.log('rename ok');
            //更新数据库
            pool.getConnection(function(err,connection){
              if(err){
                console.log("连接数据库失败！");
              }else{
                var loanId=parseInt(req.session.loanId);
                console.log(loanId+"==="+dstPath);
                connection.query('update loan set loanPortraitPath = ? where loanId = ? ',
                  [dstPathMin,loanId],
                  function(err,result){
                    if(err){
                      console.log("数据库更新失败！");
                      connection.release();
                      res.send("上传失败！");
                    }else{
                      connection.release();
                      res.send("上传成功！");
                    }
                });
              }
            });
          }
        });
      }

   });
});
// ==========路由配置==========

// ==========监听==========
app.listen(6090,"127.0.0.1");
console.log('Web server has started on http://127.0.0.1:6090/');
// ==========监听==========

module.exports = app;









