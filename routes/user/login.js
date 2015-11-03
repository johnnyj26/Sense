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
	//登录页面
	app.get('/login',function(req,res){
	  res.sendfile(__dirname+"/views/user/login.html");
	});
	// 验证账户密码
	app.post('/loginValid',function(req,res){
		var userName=req.param("User_Name").toString();
		var password=req.param("Password").toString();
		var passwordMD=myMD5(password);
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接数据库失败！");
			}else{
				connection.query("select count(1) count from user_main where userName=? and password=?",
					[userName,passwordMD],
					function(err,result){
						if(err){
							console.log("数据库查询失败！");
							connection.release();
						}else{
							connection.release();
							if(result[0].count>0){
								var rememberMe=req.param("S_Login_Check");
								if(rememberMe){
									res.cookie("SenseRememberName",userName,{ maxAge: 60*1000*60*24*7,httpOnly:true, path:'/'});
								}else{
									res.cookie("SenseRememberName",null,{ maxAge: 0});
								}
								req.session.userName=userName;
								res.send("success");
							}else{
								res.send("用户名或密码错误");
							}
						}
				});
			}
		});
	});
	// 验证cookies
	app.post('/cookieValide',function(req,res){
		var userName=req.cookies.SenseRememberName;
		var test=req.session.userName;
		console.log(test);
		res.send(userName);
	});
}





