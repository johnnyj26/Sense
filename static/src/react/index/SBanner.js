var SBanner = React.createClass({
  render:function() {
    return(
      <div className="s-index-banner">
        <div className="inbanner">
          <div className="s-banner-imgM" style={{opacity:0,backgroundImage:"url('/static/src/img/home-bg.jpg')"}} data-br="0" >
            <section id="cube-con">
              <div id="cube" className="">
                <figure className="front">S</figure>
                <figure className="back">e</figure>
                <figure className="right">n</figure>
                <figure className="left"></figure>
                <figure className="top">s</figure>
                <figure className="bottom">e</figure>
              </div>
            </section>
          </div>
          <div className="s-banner-imgM" style={{opacity:0,backgroundImage:"url('/static/src/img/html5.png')"}} data-br="1" >
          </div>
          <div className="layout">
            <div className="trigger-bar" >
              <div className="scrollable-trigger" id="inbannertag">
               <a target="_self" data-spm-click="gostr=/tbtrip;locaid=a1" href="javascript:void(0);" className="current" data-br="0">
               </a>
               <a target="_self" data-spm-click="gostr=/tbtrip;locaid=a1" href="javascript:void(0);" className="" data-br="1">
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount:function(){
    (function(b, e) {
      var c = b.jQuery;
      var j = function() {
        c("#inbannertag").find("a[data-br=0]").addClass("current");
        c(".inbanner").find("div[data-br=0]").addClass("selected");
        c(".inbanner").find("div[data-br=0]").css("opacity", 1);
        c(".inbanner").find("div[data-br=0]").css("z-index", 20);
      };
      j();
      var k = null;
      var s = function(v) {
        c("#inbannertag").find("a[data-br]").removeClass("current");
        c("#inbannertag").find("a[data-br=" + v + "]").addClass("current");
        var t = c(".inbanner").find("div[data-br=" + v + "]");
        if (k != null) {
          clearInterval(k);
        }
        var w = 0;
        k = setInterval(function() {
              w += 0.05;
              t.css("opacity", w);
              c(".inbanner").find("div[data-br][data-br!=" + v + "]").each(function(){
                var x = c(this).css("opacity");
                x -= 0.05;
                if (x < 0) {
                  x = 0
                }
                c(this).css("opacity", x)
              });
              if (w >= 1) {
                clearInterval(k);
                t.addClass("selected");
                c(".inbanner").find("div[data-br][data-br!=" + v + "]").removeClass("selected");
                t.css("z-index", "20");
                c(".inbanner").find("div[data-br][data-br!=" + v + "]").css("z-index", "10")
              }
            }, 50)
      };
      var ddd= setInterval(function() {
        var v = c("#inbannertag").find("a[data-br]").length;
        var w = c(".inbanner").find("div[data-br][class*=selected]").attr("data-br");
        var t = (parseInt(w, 10) + 1) % v;
        s(t)
      }, 6000);
      
      c("#inbannertag").delegate("a[data-br]", "click", function() {
        var t = c(this).attr("data-br");
        s(t);
        return false
      });
    })(window);
  }
});

module.exports=SBanner;