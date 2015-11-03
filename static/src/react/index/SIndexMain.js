// 组合
var SHeader=require("../global/SHeader.js");
var SBanner=require("./SBanner.js");
var SIndexBody=require("./SIndexBody.js");
var SIndexFooter=require("./SIndexFooter.js");

var SIndexMain = React.createClass({
  render: function() {
    return(
      <div style={{height:"100%"}}>
        <SHeader />
        <SBanner />
        <SIndexBody />
        <SIndexFooter />
      </div>
    )
  }
});

React.render(
  <SIndexMain />,
  document.body
);