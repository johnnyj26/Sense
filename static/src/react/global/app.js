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