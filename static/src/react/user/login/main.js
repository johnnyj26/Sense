// 登录页面--组合
var SImage=require("./sImage.js");
var SGradient=require("./sGradient.js");
var MpRegTopContainer=require("../global/loginHead.js");
var SLoginContent=require("./SLoginContent.js");

var MpRegMain=React.createClass({
  render:function(){
    return (
      <div>
        <SImage />
        <SGradient />
        <MpRegTopContainer />
        <SLoginContent />
      </div>
    )
  }
});

React.render(
  <MpRegMain />,
  document.body
);