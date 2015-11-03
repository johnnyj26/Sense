var SHeader = React.createClass({
  getInitialState: function() {
    return {
      userName:"登录Sense",
      userNameUrl:"/login"
    }
  },
  render: function() {
    return(
      <header>
        <div className="sRow">
          <div className="sense-logo">
            <a href="/index">Sense</a>
          </div>
          <nav>
            <a href="/index" className="active">Sense首页</a>
            <a href="#">投资列表</a>
            <a href="#">关于Sense</a>
            <a href={this.state.userNameUrl}>{this.state.userName}</a>
          </nav>
        </div>
      </header>
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