var SIndexIcon = React.createClass({
  render: function() {
    return(
      <div className="s-index-Icon">
        <div className="sRow">
          <h1>SENSE CORE</h1>
          <h5>Technology we are involved in</h5>
          <div className="icons">
            <div className="float-25">
              <figure className="s-index-icon-M">
                <div className="s-index-icon-M1-front"></div>
                <div className="s-index-icon-M1-back">HTML5</div>
              </figure>
            </div>
            <div className="float-25">
              <figure className="s-index-icon-M">
                <div className="s-index-icon-M2-front"></div>
                <div className="s-index-icon-M2-back">CSS3</div>
              </figure>
            </div>
            <div className="float-25">
              <figure className="s-index-icon-M">
                <div className="s-index-icon-M3-front"></div>
                <div className="s-index-icon-M3-back">REACT</div>
              </figure>
            </div>
            <div className="float-25">
              <figure className="s-index-icon-M">
                <div className="s-index-icon-M4-front"></div>
                <div className="s-index-icon-M4-back">GULP</div>
              </figure>
            </div>
          </div>
          <h5>Sense website</h5>
        </div>
      </div>
    )
  }
});

module.exports=SIndexIcon;