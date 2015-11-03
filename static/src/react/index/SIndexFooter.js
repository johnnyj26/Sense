var SIndexFooter = React.createClass({
  render: function() {
    return(
      <footer>
        <div className="sRow clearfix">
          <div className="float-25">
            <ul>
              <li><h1>网站地图</h1></li>
              <li><a href="index">Sense首页</a></li>
              <li><a href="#">投资列表</a></li>
              <li><a href="#">关于Sense</a></li>
            </ul>
          </div>
          <div className="float-25">
            <ul>
              <li><h1>使用技术</h1></li>
              <li><a href="http://facebook.github.io/react/" target="_blank">ReactJs</a></li>
              <li><a href="https://nodejs.org/en/" target="_blank">NodeJs</a></li>
              <li><a href="http://gulpjs.com/" target="_blank">Gulp</a></li>
            </ul>
          </div>
          <div className="float-25">
            <ul>
              <li><h1>合作伙伴</h1></li>
              <li><a href="#">NICE</a></li>
            </ul>
          </div>
          <div className="float-25 footerMess">
            <h1>Sense</h1>
            <h2>Copyright &copy; 2015 Sense Inc.</h2>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports=SIndexFooter;