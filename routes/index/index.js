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
module.exports = function(app,__dirname){
	//首页
	app.get('/index',function(req,res){
	  res.sendfile(__dirname+"/views/index.html");
	});
	//查询Loan
	app.post('/sIndexQueryLoan',function(req,res){
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接数据库失败！");
			}else{
				connection.query('select * from loan order by inputTime desc limit 0,4 ',
					[],
					function(err,result){
						if(err){
							console.log("数据库查询失败！");
							connection.release();
							res.send(0);
						}else{
							connection.release();
							var loanMs=JSON.stringify(result);
							res.send(loanMs);
						}
				});
			}
		});
	});
	//头部session
	app.post('/headerSession',function(req,res){
		var userName=req.session.userName;
		var userNameObj={userName:userName};
		res.send(JSON.stringify(userNameObj));
	});
}














