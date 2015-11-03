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

	// 登录页面--组合
	var SImage=__webpack_require__(9);
	var SGradient=__webpack_require__(10);
	var MpRegTopContainer=__webpack_require__(11);
	var SLoginContent=__webpack_require__(12);

	var MpRegMain=React.createClass({displayName: "MpRegMain",
	  render:function(){
	    return (
	      React.createElement("div", null, 
	        React.createElement(SImage, null), 
	        React.createElement(SGradient, null), 
	        React.createElement(MpRegTopContainer, null), 
	        React.createElement(SLoginContent, null)
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
/* 9 */
/***/ function(module, exports) {

	// 组件--登录页面大背景--图片
	var MpLoginMpImage=React.createClass({displayName: "MpLoginMpImage",
		render:function(){
		  return (
		    React.createElement("div", {className: "mp-image mp-image-1"})
		  )
		}
	});

	module.exports=MpLoginMpImage;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 组件--页面大背景--线性渐变
	var SLoginGradient=React.createClass({displayName: "SLoginGradient",
		render:function(){
		  return (
		    React.createElement("div", {className: "mp-gradient mp-gradient-1"})
		  )
		}
	});

	module.exports=SLoginGradient;

/***/ },
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
/* 12 */
/***/ function(module, exports) {

	// 组件--登录页面主体
	var SLoginContent = React.createClass({displayName: "SLoginContent",
	        getInitialState:function(){
	          return {
	            logErr:"",
	            userName:"",
	            remember:false
	          };
	        },
	        render:function(){
	          return(
	            React.createElement("div", {className: "mp-login-content-container"}, 
	              React.createElement("div", {className: "mp-login-content-div"}, 
	                React.createElement("form", {className: "mp-login-form", action: "#", method: "post", id: "mp_login_form"}, 
	                  React.createElement("input", {className: "mp-login-form-text", type: "text", placeholder: "请输入用户名", value: this.state.userName, name: "User_Name", onChange: this.logErrClear, ref: "User_Name"}), 
	                  React.createElement("br", null), 
	                  React.createElement("input", {className: "mp-login-form-pass", type: "password", placeholder: "请输入密码", name: "Password", onChange: this.logErrClear}), 
	                  React.createElement("div", {className: "mp-login-form-logErr"}, this.state.logErr), 
	                  React.createElement("div", {className: "clearfix mp-login-form-checkbox-div"}, 
	                    React.createElement("div", {className: "mp-login-form-checkbox"}, 
	                      React.createElement("input", {type: "checkbox", checked: this.state.remember, onClick: this.rememberClick, name: "S_Login_Check"}), " 记住用户名"
	                    ), 
	                    React.createElement("a", {className: "mp-login-form-checkbox-a", href: "#"}, "忘记密码")
	                  ), 
	                  React.createElement("input", {type: "submit", onClick: this.loginSubmit, className: "mp-login-form-submit", value: "立 即 登 录"}), 
	                  React.createElement("div", {className: "mp-login-form-sign-up"}, "没有账号？", React.createElement("a", {href: "regist"}, "免费注册"))
	                ), 
	                React.createElement("h1", {className: "mp-login-h1"}, "Where to invest the best"), 
	                React.createElement("p", {className: "mp-login-p"}, "Principal safeguard plan"), 
	                React.createElement("p", {className: "mp-login-p"}, "Account real name authentication"), 
	                React.createElement("p", {className: "mp-login-p"}, "Risk reserve fund by the people's livelihood banking supervision")
	              )
	            )
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

/***/ }
/******/ ]);