// 组合
var MpRegMpImage=require("./regMpImage.js");
var MpRegMpGradient=require("./regMpGradient.js");
var MpRegTopContainer=require("../global/loginHead.js");
var MpRegContentContainer=require("./regContentContainer.js");

var MpRegMain=React.createClass({
  render:function(){
    return (
      <div>
        <MpRegMpImage />
        <MpRegMpGradient />
        <MpRegTopContainer />
        <MpRegContentContainer />
      </div>
    )
  }
});

React.render(
  <MpRegMain />,
  document.body
);