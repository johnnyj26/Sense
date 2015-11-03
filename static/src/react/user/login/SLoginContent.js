// 组件--登录页面主体
var SLoginContent = React.createClass({
        getInitialState:function(){
          return {
            logErr:"",
            userName:"",
            remember:false
          };
        },
        render:function(){
          return(
            <div className="mp-login-content-container">
              <div className="mp-login-content-div">
                <form className="mp-login-form" action="#" method="post" id="mp_login_form">
                  <input className="mp-login-form-text" type="text" placeholder="请输入用户名" value={this.state.userName} name="User_Name" onChange={this.logErrClear} ref="User_Name" />
                  <br/>
                  <input className="mp-login-form-pass" type="password" placeholder="请输入密码" name="Password" onChange={this.logErrClear} />
                  <div className="mp-login-form-logErr">{this.state.logErr}</div>
                  <div className="clearfix mp-login-form-checkbox-div">
                    <div className="mp-login-form-checkbox">
                      <input type="checkbox" checked={this.state.remember} onClick={this.rememberClick} name="S_Login_Check" /> 记住用户名
                    </div>
                    <a className="mp-login-form-checkbox-a" href="#">忘记密码</a>
                  </div>
                  <input type="submit" onClick={this.loginSubmit} className="mp-login-form-submit" value="立 即 登 录" />
                  <div className="mp-login-form-sign-up">没有账号？<a href="regist">免费注册</a></div>
                </form>
                <h1 className="mp-login-h1">Where to invest the best</h1>
                <p className="mp-login-p">Principal safeguard plan</p>
                <p className="mp-login-p">Account real name authentication</p>
                <p className="mp-login-p">Risk reserve fund by the people&apos;s livelihood banking supervision</p>
              </div>
            </div>
          );
        },
        loginSubmit:function(){
          if($("#mp_login_form").valid()){
            $.post("loginValid",$("#mp_login_form").serialize(),function(data){
              if(data=="success"){
                window.location.href="/index";
              }else{
                this.setState({logErr:data});
              }
            }.bind(this));
          }
        },
        logErrClear:function(){
          var username=React.findDOMNode(this.refs.User_Name).value;
          this.setState({logErr:"",userName:username});
        },
        rememberClick:function(){
          this.setState({remember:!this.state.remember});
        },
        componentDidMount:function(){
          $.validator.addMethod("isNickName",function(value,element){
            var nickName = /^[^0-9](.)*$/;
            return this.optional(element) || (nickName.test(value));
          },"昵称不能以数字开头");
          $("#mp_login_form").validate({
            submitHandler:function(form){
              console.log("submit");
            },
            rules:{
              User_Name: {
                required: true,
                isNickName:true
              },
              Password: {
                required: true,
                minlength: 6
              }
            },
            messages:{
              User_Name: {
                required:"请输入用户名"
              },
              Password: {
                required: "请输入密码",
                minlength: "密码不能小于6个字符",
              }
            },
            errorClass:"mp-jv-error",
            errorPlacement:function(error,element) {
              error.insertAfter(element);
            }
          });
          $.post("cookieValide",{},function(data){
            if(data){
              this.setState({userName:data,remember:true});
            }else{
              this.setState({remember:false});
            }
          }.bind(this)); 
        }
      })

module.exports=SLoginContent;