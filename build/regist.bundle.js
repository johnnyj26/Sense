/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// 组合
	var MpRegMpImage=__webpack_require__(13);
	var MpRegMpGradient=__webpack_require__(14);
	var MpRegTopContainer=__webpack_require__(11);
	var MpRegContentContainer=__webpack_require__(15);

	var MpRegMain=React.createClass({displayName: "MpRegMain",
	  render:function(){
	    return (
	      React.createElement("div", null, 
	        React.createElement(MpRegMpImage, null), 
	        React.createElement(MpRegMpGradient, null), 
	        React.createElement(MpRegTopContainer, null), 
	        React.createElement(MpRegContentContainer, null)
	      )
	    )
	  }
	});

	React.render(
	  React.createElement(MpRegMain, null),
	  document.body
	);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// 组件--头部
	var MpRegTopContainer = React.createClass({displayName: "MpRegTopContainer",
	  getInitialState: function() {
	    return {};
	  },
	  render: function() {
	    return (
	      React.createElement("div", {className: "mp-reg-top-container", id: "mp_reg_top_container"}, 
	        React.createElement("div", {className: "mp-reg-top-div"}, 
	          React.createElement("div", {className: "mp-reg-top-div-L"}, React.createElement("a", {href: "/index"}, "Sense")), 
	          React.createElement("div", {className: "mp-reg-top-div-R"}, 
	            React.createElement("a", {className: "mp-reg-top-div-R-sign-in", href: "login"}, "登 录"), 
	            React.createElement("a", {className: "mp-reg-top-div-R-sign-up", href: "regist"}, "注 册")
	          )
	        )
	      )
	    );
	  }
	});

	module.exports=MpRegTopContainer;

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// 组件--页面大背景--图片
	var MpRegMpImage=React.createClass({displayName: "MpRegMpImage",
		render:function(){
		  return (
		    React.createElement("div", {className: "mp-image mp-image-1"})
		  )
		}
	});

	module.exports=MpRegMpImage;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 组件--页面大背景--线性渐变
	var MpRegMpGradient=React.createClass({displayName: "MpRegMpGradient",
		render:function(){
		  return (
		    React.createElement("div", {className: "mp-gradient mp-gradient-4"})
		  )
		}
	});

	module.exports=MpRegMpGradient;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 组件--mask遮罩
	var MpRegMask=React.createClass({displayName: "MpRegMask",
	  render:function(){
	    return (
	      React.createElement("div", {className: this.props.maskClass})
	    )
	  }
	});
	// 组件--注册成功框
	var MpRegSuccess=React.createClass({displayName: "MpRegSuccess",
	  render:function(){
	    return (
	      React.createElement("div", {className: this.props.regSuccClass}, 
	        React.createElement("div", {className: "mp-reg-success-top"}), 
	        React.createElement("div", {className: "mp-reg-success-content"}, 
	          React.createElement("h1", null, "注册成功！"), 
	          React.createElement("p", null, React.createElement("span", {id: "reg-success-second"}, this.props.sencods), " 秒后自动跳转，或点击下方", React.createElement("span", {className: "plane"}, "小飞机"), "即刻赶往登录页面"), 
	          React.createElement("a", {href: "javascript:void(0)", id: "reg_success_plane", onClick: this.props.fly})
	        )
	      )
	    )
	  }
	});

	      // 组件--中间表单部分
	      var MpRegContentContainer = React.createClass({displayName: "MpRegContentContainer",
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
	            React.createElement("div", {className: "mp-reg-content-container", id: "mp_reg_content_container"}, 
	              React.createElement("div", {className: "mp-reg-content-div"}, 
	                React.createElement("form", {className: "mp-reg-form", action: "registSubmit", method: "post", id: "mp_reg_form"}, 
	                  React.createElement("input", {className: "mp-reg-form-text", id: "user_name", name: "User_Name", type: "text", placeholder: "请输入用户名"}), 
	                  React.createElement("br", null), 
	                  React.createElement("input", {className: "mp-reg-form-pass", id: "password", name: "Password", type: "password", placeholder: "请输入密码"}), 
	                  React.createElement("br", null), 
	                  React.createElement("input", {className: "mp-reg-form-pass-sec", id: "password_sec", name: "Password_Sec", type: "password", placeholder: "请确认密码"}), 
	                  React.createElement("div", {className: "clearfix mp-reg-form-valicode-div"}, 
	                    React.createElement("input", {type: "text", className: "mp-reg-form-valicode", id: "vali_code", name: "Vali_Code", placeholder: "请输入验证码"}), 
	                    React.createElement("img", {id: "valicode_img", src: "valicode", width: "152px", alt: "", className: "mp-reg-form-valicode-img", ref: "valiCodeImg", onClick: this.valiCodeClick})
	                  ), 
	                  React.createElement("div", {className: "mp-reg-form-agree"}, 
	                    React.createElement("input", {type: "checkbox", name: "Agreement", checked: this.state.agreement, onClick: this.agreeClick}), " 我已阅读并同意 ", React.createElement("a", {href: "registAgreement", target: "_blank"}, "《Sense注册及服务协议》")
	                  ), 
	                  React.createElement("input", {className: "mp-reg-form-submit", type: "submit", onClick: this.regSubmit, value: "立 即 注 册"}), 
	                  React.createElement("div", {className: "mp-login-form-sign-in"}, "已有账号？", React.createElement("a", {href: "login"}, "直接登录"))
	                ), 
	                React.createElement("h1", {className: "mp-reg-h1"}, "Welcome to Sense"), 
	                React.createElement("p", {className: "mp-reg-p"}, "Free registration Sense account"), 
	                React.createElement("p", {className: "mp-reg-p"}, "Sense is the domestic professional P2P financial platform"), 
	                React.createElement("p", {className: "mp-reg-p"}, "We use React and Nodejs"), 
	                React.createElement("p", {className: "mp-reg-p"}, "Design inspiration from foreign websites"), 
	                React.createElement("p", {className: "mp-reg-p"}, "We don't support IE8")
	              ), 
	              React.createElement(MpRegMask, {maskClass: this.state.maskClass}), 
	              React.createElement(MpRegSuccess, {fly: this.fly, sencods: this.state.sencods, regSuccClass: this.state.regSuccClass})
	            )
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

/***/ }
/******/ ]);