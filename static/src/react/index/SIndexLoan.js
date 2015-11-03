var SIndexLoanM=require("./SIndexLoanM.js");

var SIndexLoan = React.createClass({
  getInitialState: function() {
    return {
      LoanMs:[]
    }
  },
  render: function() {
    return(
      <div className="s-index-loan">
        <div className="sRow clearfix">
        {
          this.state.LoanMs.map(function(loanM){
            return <div className="float-25">
                    <SIndexLoanM loanMess={loanM} />
                  </div>;
          })
        }
          
        </div>
      </div>
    )
  },
  componentDidMount:function(){
    $.post("/sIndexQueryLoan",{},function(data){
      this.setState({LoanMs:data});
    }.bind(this),"json");
  }
});

module.exports=SIndexLoan;