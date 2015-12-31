var React = require('react');

var Footer = React.createClass({
  render: function() {
    if(this.props.styles) {
      footerStyle = this.props.styles
    }else {
    footerStyle = {
      background: '#0ad',
      color: '#fff',
      height: '200',
      
      }
    }

    return (
      <div style={footerStyle} className='container-fluid'>
        <div className='row'>
          <div className="col-xs-12 col-sm-3 col-sm-offset-1"></div>
          <div className="col-xs-12 col-sm-3 col-sm-offset-1"></div>
          <div className="col-xs-12 col-sm-3 col-sm-offset-1"></div>
        </div>
      </div>
    );
  }
});
module.exports = Footer;
