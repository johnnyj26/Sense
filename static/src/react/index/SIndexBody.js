var SIndexIcon=require("./SIndexIcon.js");
var SIndexLoan=require("./SIndexLoan.js");

var SIndexBody = React.createClass({
    render: function() {
      return(
        <div className="s-indx-body clearfix">
          <SIndexIcon />
          <SIndexLoan />
        </div>
      )
    }
  });

module.exports=SIndexBody;