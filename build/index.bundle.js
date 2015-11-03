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
	var SHeader=__webpack_require__(1);
	var SBanner=__webpack_require__(2);
	var SIndexBody=__webpack_require__(3);
	var SIndexFooter=__webpack_require__(8);

	var SIndexMain = React.createClass({displayName: "SIndexMain",
	  render: function() {
	    return(
	      React.createElement("div", {style: {height:"100%"}}, 
	        React.createElement(SHeader, null), 
	        React.createElement(SBanner, null), 
	        React.createElement(SIndexBody, null), 
	        React.createElement(SIndexFooter, null)
	      )
	    )
	  }
	});

	React.render(
	  React.createElement(SIndexMain, null),
	  document.body
	);

/***/ },
/* 1 */
/***/ function(module, exports) {

	var SHeader = React.createClass({displayName: "SHeader",
	  getInitialState: function() {
	    return {
	      userName:"登录Sense",
	      userNameUrl:"/login"
	    }
	  },
	  render: function() {
	    return(
	      React.createElement("header", null, 
	        React.createElement("div", {className: "sRow"}, 
	          React.createElement("div", {className: "sense-logo"}, 
	            React.createElement("a", {href: "/index"}, "Sense")
	          ), 
	          React.createElement("nav", null, 
	            React.createElement("a", {href: "/index", className: "active"}, "Sense首页"), 
	            React.createElement("a", {href: "#"}, "投资列表"), 
	            React.createElement("a", {href: "#"}, "关于Sense"), 
	            React.createElement("a", {href: this.state.userNameUrl}, this.state.userName)
	          )
	        )
	      )
	    )
	  },
	  componentDidMount:function(){
	    $.post("/headerSession",{},function(data){
	      if(data.userName){
	        this.setState({userName:data.userName+" 的Sense",userNameUrl:"#"});
	      }
	    }.bind(this),"json");
	  }
	});

	module.exports=SHeader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var SBanner = React.createClass({displayName: "SBanner",
	  render:function() {
	    return(
	      React.createElement("div", {className: "s-index-banner"}, 
	        React.createElement("div", {className: "inbanner"}, 
	          React.createElement("div", {className: "s-banner-imgM", style: {opacity:0,backgroundImage:"url('/static/src/img/home-bg.jpg')"}, "data-br": "0"}, 
	            React.createElement("section", {id: "cube-con"}, 
	              React.createElement("div", {id: "cube", className: ""}, 
	                React.createElement("figure", {className: "front"}, "S"), 
	                React.createElement("figure", {className: "back"}, "e"), 
	                React.createElement("figure", {className: "right"}, "n"), 
	                React.createElement("figure", {className: "left"}), 
	                React.createElement("figure", {className: "top"}, "s"), 
	                React.createElement("figure", {className: "bottom"}, "e")
	              )
	            )
	          ), 
	          React.createElement("div", {className: "s-banner-imgM", style: {opacity:0,backgroundImage:"url('/static/src/img/html5.png')"}, "data-br": "1"}
	          ), 
	          React.createElement("div", {className: "layout"}, 
	            React.createElement("div", {className: "trigger-bar"}, 
	              React.createElement("div", {className: "scrollable-trigger", id: "inbannertag"}, 
	               React.createElement("a", {target: "_self", "data-spm-click": "gostr=/tbtrip;locaid=a1", href: "javascript:void(0);", className: "current", "data-br": "0"}
	               ), 
	               React.createElement("a", {target: "_self", "data-spm-click": "gostr=/tbtrip;locaid=a1", href: "javascript:void(0);", className: "", "data-br": "1"}
	               )
	              )
	            )
	          )
	        )
	      )
	    )
	  },
	  componentDidMount:function(){
	    (function(b, e) {
	      var c = b.jQuery;
	      var j = function() {
	        c("#inbannertag").find("a[data-br=0]").addClass("current");
	        c(".inbanner").find("div[data-br=0]").addClass("selected");
	        c(".inbanner").find("div[data-br=0]").css("opacity", 1);
	        c(".inbanner").find("div[data-br=0]").css("z-index", 20);
	      };
	      j();
	      var k = null;
	      var s = function(v) {
	        c("#inbannertag").find("a[data-br]").removeClass("current");
	        c("#inbannertag").find("a[data-br=" + v + "]").addClass("current");
	        var t = c(".inbanner").find("div[data-br=" + v + "]");
	        if (k != null) {
	          clearInterval(k);
	        }
	        var w = 0;
	        k = setInterval(function() {
	              w += 0.05;
	              t.css("opacity", w);
	              c(".inbanner").find("div[data-br][data-br!=" + v + "]").each(function(){
	                var x = c(this).css("opacity");
	                x -= 0.05;
	                if (x < 0) {
	                  x = 0
	                }
	                c(this).css("opacity", x)
	              });
	              if (w >= 1) {
	                clearInterval(k);
	                t.addClass("selected");
	                c(".inbanner").find("div[data-br][data-br!=" + v + "]").removeClass("selected");
	                t.css("z-index", "20");
	                c(".inbanner").find("div[data-br][data-br!=" + v + "]").css("z-index", "10")
	              }
	            }, 50)
	      };
	      var ddd= setInterval(function() {
	        var v = c("#inbannertag").find("a[data-br]").length;
	        var w = c(".inbanner").find("div[data-br][class*=selected]").attr("data-br");
	        var t = (parseInt(w, 10) + 1) % v;
	        s(t)
	      }, 6000);
	      
	      c("#inbannertag").delegate("a[data-br]", "click", function() {
	        var t = c(this).attr("data-br");
	        s(t);
	        return false
	      });
	    })(window);
	  }
	});

	module.exports=SBanner;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var SIndexIcon=__webpack_require__(4);
	var SIndexLoan=__webpack_require__(5);

	var SIndexBody = React.createClass({displayName: "SIndexBody",
	    render: function() {
	      return(
	        React.createElement("div", {className: "s-indx-body clearfix"}, 
	          React.createElement(SIndexIcon, null), 
	          React.createElement(SIndexLoan, null)
	        )
	      )
	    }
	  });

	module.exports=SIndexBody;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var SIndexIcon = React.createClass({displayName: "SIndexIcon",
	  render: function() {
	    return(
	      React.createElement("div", {className: "s-index-Icon"}, 
	        React.createElement("div", {className: "sRow"}, 
	          React.createElement("h1", null, "SENSE CORE"), 
	          React.createElement("h5", null, "Technology we are involved in"), 
	          React.createElement("div", {className: "icons"}, 
	            React.createElement("div", {className: "float-25"}, 
	              React.createElement("figure", {className: "s-index-icon-M"}, 
	                React.createElement("div", {className: "s-index-icon-M1-front"}), 
	                React.createElement("div", {className: "s-index-icon-M1-back"}, "HTML5")
	              )
	            ), 
	            React.createElement("div", {className: "float-25"}, 
	              React.createElement("figure", {className: "s-index-icon-M"}, 
	                React.createElement("div", {className: "s-index-icon-M2-front"}), 
	                React.createElement("div", {className: "s-index-icon-M2-back"}, "CSS3")
	              )
	            ), 
	            React.createElement("div", {className: "float-25"}, 
	              React.createElement("figure", {className: "s-index-icon-M"}, 
	                React.createElement("div", {className: "s-index-icon-M3-front"}), 
	                React.createElement("div", {className: "s-index-icon-M3-back"}, "REACT")
	              )
	            ), 
	            React.createElement("div", {className: "float-25"}, 
	              React.createElement("figure", {className: "s-index-icon-M"}, 
	                React.createElement("div", {className: "s-index-icon-M4-front"}), 
	                React.createElement("div", {className: "s-index-icon-M4-back"}, "GULP")
	              )
	            )
	          ), 
	          React.createElement("h5", null, "Sense website")
	        )
	      )
	    )
	  }
	});

	module.exports=SIndexIcon;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var SIndexLoanM=__webpack_require__(6);

	var SIndexLoan = React.createClass({displayName: "SIndexLoan",
	  getInitialState: function() {
	    return {
	      LoanMs:[]
	    }
	  },
	  render: function() {
	    return(
	      React.createElement("div", {className: "s-index-loan"}, 
	        React.createElement("div", {className: "sRow clearfix"}, 
	        
	          this.state.LoanMs.map(function(loanM){
	            return React.createElement("div", {className: "float-25"}, 
	                    React.createElement(SIndexLoanM, {loanMess: loanM})
	                  );
	          })
	        
	          
	        )
	      )
	    )
	  },
	  componentDidMount:function(){
	    $.post("/sIndexQueryLoan",{},function(data){
	      this.setState({LoanMs:data});
	    }.bind(this),"json");
	  }
	});

	module.exports=SIndexLoan;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var app=__webpack_require__(7);

	var SIndexLoanM = React.createClass({displayName: "SIndexLoanM",
	  loanSubmit:function(){
	    alert("敬请期待！");
	    return false;
	  },
	  render: function() {
	    return(
	      React.createElement("div", {className: "s-index-loan-M clearfix"}, 
	        React.createElement("img", {src: this.props.loanMess.loanPortraitPath, alt: ""}), 
	        React.createElement("h1", null, this.props.loanMess.title), 
	        React.createElement("div", {className: "s-index-loan-pro-out"}, 
	          React.createElement("div", {className: "s-index-loan-pro-in", style: {width:app.loanProgress(this.props.loanMess.biddingAmount,this.props.loanMess.amount)+"%"}})
	        ), 
	        React.createElement("div", {className: "s-index-loan-pro-text"}, 
	        this.props.loanMess.biddingAmount, "元/", this.props.loanMess.amount, "元"
	        ), 
	        React.createElement("div", {className: "s-index-loan-mess margin-top-10"}, 
	        "年化利率：", React.createElement("span", {className: "e"}, this.props.loanMess.annualInterestRate), "%"
	        ), 
	        React.createElement("div", {className: "s-index-loan-mess"}, 
	        "投资期限：", React.createElement("span", {className: "e"}, this.props.loanMess.termCount), "个月"
	        ), 
	        React.createElement("div", {className: "s-index-loan-mess"}, 
	        "还款方式：", app.parseRepayType(this.props.loanMess.repayType)
	        ), 
	        React.createElement("a", {className: "s-index-loan-btn loan300", href: "", onClick: this.loanSubmit}, "投资")
	      )
	    )
	  }
	});

	module.exports=SIndexLoanM;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function parseRepayType(repayTypeNum){
	  if(repayTypeNum==0){
	    return "等额本息";
	  }else if(repayTypeNum==1){
	    return "按月付息，到期还本";
	  }else if(repayTypeNum==2){
	    return "一次性还本付息";
	  }
	}
	function loanProgress(biddingAmount,amount){
	  var biddingAmountInt=parseInt(biddingAmount);
	  var amountInt=parseInt(amount);
	  return (biddingAmountInt/amountInt*100);
	}

	exports.parseRepayType=parseRepayType;
	exports.loanProgress=loanProgress;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var SIndexFooter = React.createClass({displayName: "SIndexFooter",
	  render: function() {
	    return(
	      React.createElement("footer", null, 
	        React.createElement("div", {className: "sRow clearfix"}, 
	          React.createElement("div", {className: "float-25"}, 
	            React.createElement("ul", null, 
	              React.createElement("li", null, React.createElement("h1", null, "网站地图")), 
	              React.createElement("li", null, React.createElement("a", {href: "index"}, "Sense首页")), 
	              React.createElement("li", null, React.createElement("a", {href: "#"}, "投资列表")), 
	              React.createElement("li", null, React.createElement("a", {href: "#"}, "关于Sense"))
	            )
	          ), 
	          React.createElement("div", {className: "float-25"}, 
	            React.createElement("ul", null, 
	              React.createElement("li", null, React.createElement("h1", null, "使用技术")), 
	              React.createElement("li", null, React.createElement("a", {href: "http://facebook.github.io/react/", target: "_blank"}, "ReactJs")), 
	              React.createElement("li", null, React.createElement("a", {href: "https://nodejs.org/en/", target: "_blank"}, "NodeJs")), 
	              React.createElement("li", null, React.createElement("a", {href: "http://gulpjs.com/", target: "_blank"}, "Gulp"))
	            )
	          ), 
	          React.createElement("div", {className: "float-25"}, 
	            React.createElement("ul", null, 
	              React.createElement("li", null, React.createElement("h1", null, "合作伙伴")), 
	              React.createElement("li", null, React.createElement("a", {href: "#"}, "NICE"))
	            )
	          ), 
	          React.createElement("div", {className: "float-25 footerMess"}, 
	            React.createElement("h1", null, "Sense"), 
	            React.createElement("h2", null, "Copyright © 2015 Sense Inc.")
	          )
	        )
	      )
	    )
	  }
	});

	module.exports=SIndexFooter;

/***/ }
/******/ ]);