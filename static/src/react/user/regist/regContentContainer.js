// 组件--mask遮罩
var MpRegMask=React.createClass({
  render:function(){
    return (
      <div className={this.props.maskClass} ></div>
    )
  }
});
// 组件--注册成功框
var MpRegSuccess=React.createClass({
  render:function(){
    return (
      <div className={this.props.regSuccClass}>
        <div className="mp-reg-success-top"></div>
        <div className="mp-reg-success-content">
          <h1>注册成功！</h1>
          <p><span id="reg-success-second">{this.props.sencods}</span> 秒后自动跳转，或点击下方<span className="plane">小飞机</span>即刻赶往登录页面</p>
          <a href="javascript:void(0)" id="reg_success_plane" onClick={this.props.fly}></a>
        </div>
      </div>
    )
  }
});

      // 组件--中间表单部分
      var MpRegContentContainer = React.createClass({
        getInitialState: function() {
          return {
            agreement:true,
            sencods:10,
            maskClass:"mp-reg-mask",
            regSuccClass:"mp-reg-success"
          };
        },
        agreeClick:function(){
          this.setState({agreement:!this.state.agreement});
        },
        valiCodeClick:function(){
          var num=new Date().getTime();
          React.findDOMNode(this.refs.valiCodeImg).src="valicode?v="+num;
        },
        fly:function(){
          //===============纸飞机===============
            $("#reg_success_plane").animate(
            {"left":"30px","top": "30px"},
            100,function(){
              $("#reg_success_plane").animate(
              {"left":"-500px","top": "-400px"},
              800,function(){
                window.location.href="http://www.baidu.com";
              });
            });
        },
        //===============倒计时===============
        jump:function(count){
            window.setTimeout(function(){
              count--;
              if(count > 0) {
                // $("#reg-success-second").html(count);
                this.setState({sencods: count});
                this.jump(count);
              } else {
                this.fly();
              }
            }.bind(this), 1000);
        },
        regSubmit:function(){
          if($("#mp_reg_form").valid()){
            $.post("registSubmit",$("#mp_reg_form").serialize(),function(data){
              if(data.result==1){
                this.setState({maskClass: "mp-reg-mask mp-reg-mask-visible",regSuccClass:"mp-reg-success mp-reg-mask-visible"});
                this.jump(10);
                $("#reg_success_plane").click(function(){
                  fly();
                });
              }else{
                alert("注册失败,请刷新页面重新注册!");
              }
            }.bind(this),"json");
          };
        },
        render: function() {
          return (
            <div className="mp-reg-content-container" id="mp_reg_content_container">
              <div className="mp-reg-content-div">
                <form className="mp-reg-form" action="registSubmit" method="post" id="mp_reg_form">
                  <input className="mp-reg-form-text" id="user_name" name="User_Name" type="text" placeholder="请输入用户名" />
                  <br/>
                  <input className="mp-reg-form-pass" id="password" name="Password" type="password" placeholder="请输入密码" />
                  <br/>
                  <input className="mp-reg-form-pass-sec" id="password_sec" name="Password_Sec" type="password" placeholder="请确认密码" />
                  <div className="clearfix mp-reg-form-valicode-div">
                    <input type="text" className="mp-reg-form-valicode" id="vali_code" name="Vali_Code" placeholder="请输入验证码" />
                    <img id="valicode_img" src="valicode" width="152px" alt="" className="mp-reg-form-valicode-img" ref="valiCodeImg" onClick={this.valiCodeClick} />
                  </div>
                  <div className="mp-reg-form-agree">
                    <input type="checkbox" name="Agreement" checked={this.state.agreement} onClick={this.agreeClick} /> 我已阅读并同意 <a href="registAgreement" target="_blank">《Sense注册及服务协议》</a>
                  </div>
                  <input className="mp-reg-form-submit" type="submit" onClick={this.regSubmit} value="立 即 注 册" />
                  <div className="mp-login-form-sign-in">已有账号？<a href="login">直接登录</a></div>
                </form>
                <h1 className="mp-reg-h1">Welcome to Sense</h1>
                <p className="mp-reg-p">Free registration Sense account</p>
                <p className="mp-reg-p">Sense is the domestic professional P2P financial platform</p>
                <p className="mp-reg-p">We use React and Nodejs</p>
                <p className="mp-reg-p">Design inspiration from foreign websites</p>
                <p className="mp-reg-p">We don&apos;t support IE8</p>
              </div>
              <MpRegMask maskClass={this.state.maskClass} />
              <MpRegSuccess fly={this.fly} sencods={this.state.sencods} regSuccClass={this.state.regSuccClass} />
            </div>
          );
        },
        componentDidMount:function(){
          // **********************************

          //===============用户昵称验证===============
          $.validator.addMethod("isNickName",function(value,element){
            var nickName = /^[^0-9](.)*$/;
            return this.optional(element) || (nickName.test(value));
          },"昵称不能以数字开头");
          //===============表单验证===============
          $("#mp_reg_form").validate({
            submitHandler:function(form){
              console.log("submit");
            },
            rules:{
              User_Name: {
                required: true,
                isNickName:true,
                remote: {
                      url: "validateNickName",
                      type: "post",
                      dateType: "text",
                      data: {
                        nickName: function() {
                            return $("#user_name").val();
                          }
                      }
                    }
              },
              Password: {
                    required: true,
                    minlength: 6
              },
              Password_Sec: {
                required: true,
                minlength: 6,
                equalTo: "#password"
              },
              Vali_Code: {
                required:true,
                remote: {
                      url: "validateVCode",
                      type: "post",
                      dateType: "text",
                      data: {
                        valicode: function() {
                            return $("#vali_code").val();
                          }
                      }
                    }
              },
              Agreement:{
                required:true
              }
            },
            messages:{
              User_Name: {
                required:"请输入用户名",
                remote:"用户名已存在"
              },
              Password: {
                        required: "请输入密码",
                        minlength: "密码不能小于6个字符",
                    },
                    Password_Sec: {
                      required: "请再次输入密码",
                      minlength: "确认密码不能小于6个字符",
                      equalTo: "两次输入密码不一致"
                    },
              Vali_Code: {
                required:"请输入验证码",
                remote:"验证码不正确"
              },
              Agreement: {
                required:"请勾选myp2p注册及服务协议"
              }
            },
            errorClass:"mp-jv-error",
            errorPlacement:function(error,element) {
              if (element.attr("name") == "Vali_Code"){
                error.insertAfter(element.parent());
              }else if(element.attr("name") == "Agreement"){
                error.insertAfter(element.parent());
              }else{
                error.insertAfter(element); 
              }
            }
          });
          // **********************************
        }
      });

module.exports=MpRegContentContainer;