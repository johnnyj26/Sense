// ====================验证码
var ccap = require('ccap');
var captcha = ccap({
  width:152,
  height:42,
  offset:40,
  quality:100,
  _text_len:4,
  fontsize:40
});
// ====================验证码

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

// ====================md5
var crypto = require('crypto');
var myMD5 = function(data) {  
    return crypto.createHash('md5').update(data).digest('hex').toUpperCase();
}
// ====================md5

module.exports = function(app,__dirname){
	//注册页面
	app.get('/regist',function(req,res){
	  res.sendfile(__dirname+"/views/user/regist.html");
	});
	// 生成验证码
	app.get('/valicode',function(req,res){
	    var ary = captcha.get();
	    var txt = ary[0].substr(0,4);
	    var buf = ary[1];
	    // 将txt存入session
	    req.session.valiCode=txt;
	    res.end(buf);
	    console.log(txt);
	});
	// 验证验证码
	app.post('/validateVCode',function(req,res){
	  var sessionVCode=req.session.valiCode;
	  var inputVCode=req.param("valicode");
	  if(sessionVCode){
	  	if(sessionVCode.toString().toLowerCase()==inputVCode.toString().toLowerCase()){
			res.send(true);
		}else{
		    res.send(false);
		}
	  }else{
	  	res.send(false);
	  }
	});

	//用户名唯一性
	app.post('/validateNickName',function(req,res){
		var nickName=req.param("nickName");
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接数据库失败！");
			}else{
				connection.query('select count(1) count from user_main where userName=?',
					[nickName],
					function(err,result){
						if(err){
							console.log("数据库查询失败！");
							connection.release();
						}else{
							connection.release();
							if(result[0].count>0){
								res.send(false);
							}else{
								res.send(true);
							}
						}
				});
			}
		});
	});
	//注册按钮
	app.post('/registSubmit',function(req,res){
		var userName=req.param("User_Name").toString();
		var password=req.param("Password").toString();
		var passwordMD=myMD5(password);
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接数据库失败！");
			}else{
				connection.query('insert into user_main set ?',
					{userName:userName,password:passwordMD},
					function(err,result){
						if(err){
							console.log("插入数据库失败！");
							connection.release();
							var regResult={result:0};
							res.send(JSON.stringify(regResult));
						}else{
							console.log("新用户插入成功！ID为:"+result.insertId);
							connection.release();
							var regResult={result:1};
							res.send(JSON.stringify(regResult));
						}
				});
			}
		});
	});
	//注册协议页面跳转
	app.get('/registAgreement',function(req,res){
	  res.sendfile(__dirname+"/views/user/agreement.html");
	});
}















