var app=require("../global/app.js");

var SIndexLoanM = React.createClass({
  loanSubmit:function(){
    alert("敬请期待！");
    return false;
  },
  render: function() {
    return(
      <div className="s-index-loan-M clearfix">
        <img src={this.props.loanMess.loanPortraitPath} alt="" />
        <h1>{this.props.loanMess.title}</h1>
        <div className="s-index-loan-pro-out">
          <div className="s-index-loan-pro-in" style={{width:app.loanProgress(this.props.loanMess.biddingAmount,this.props.loanMess.amount)+"%"}}></div>
        </div>
        <div className="s-index-loan-pro-text">
        {this.props.loanMess.biddingAmount}元/{this.props.loanMess.amount}元
        </div>
        <div className="s-index-loan-mess margin-top-10">
        年化利率：<span className="e">{this.props.loanMess.annualInterestRate}</span>%
        </div>
        <div className="s-index-loan-mess">
        投资期限：<span className="e">{this.props.loanMess.termCount}</span>个月
        </div>
        <div className="s-index-loan-mess">
        还款方式：{app.parseRepayType(this.props.loanMess.repayType)}
        </div>
        <a className="s-index-loan-btn loan300" href="" onClick={this.loanSubmit}>投资</a>
      </div>
    )
  }
});

module.exports=SIndexLoanM;