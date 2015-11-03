// 组件--头部
var MpRegTopContainer = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className="mp-reg-top-container" id="mp_reg_top_container">
        <div className="mp-reg-top-div">
          <div className="mp-reg-top-div-L"><a href="/index">Sense</a></div>
          <div className="mp-reg-top-div-R">
            <a className="mp-reg-top-div-R-sign-in" href="login">登 录</a>
            <a className="mp-reg-top-div-R-sign-up" href="regist">注 册</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports=MpRegTopContainer;