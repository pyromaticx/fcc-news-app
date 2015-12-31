var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SocialIcon = require('./SocialIcon.jsx');
var Menu = require('./Menu.jsx');

var Header = React.createClass({
  render: function() {
  var headerStyle = {
      background: '#0ad',
      color: '#fff',
      height: '300',

    };
  var titleStyle = {
    textAlign: 'center'
  };
  var iconStyle = {
    textAlign: 'center',
    marginTop: '30',

  };
  var active = {
    border: '2px solid #fff',
    borderRadius: '20'
  };
  var logoText = {
    fontSize: '3.5vw',

  };


  return (

    <div id='header' style={headerStyle} className='container-fluid'>
      <div className='row'>
        <div style={titleStyle} className='col-xs-12 col-sm-5 '>
          <a target='_blank' href="http://www.freecodecamp.com">
            <h1 style={logoText}>free Code Camp News</h1>
          </a>
          <h5>Top stories on freeCodeCamp!</h5>
        </div>
        <div style={iconStyle} className='col-xs-12 col-sm-7'>
          <SocialIcon url="twitter" icon="col-xs-2 col-xs-offset-1 fa fa-twitter" />
          <SocialIcon url="https://www.facebook.com/kelly.garrett.7946" icon="col-xs-2 fa fa-facebook-official" />
          <SocialIcon url="https://www.instagram.com/pyromaticx/" icon="col-xs-2 fa fa-instagram" />
          <SocialIcon url="https://www.linkedin.com/in/kellyrgarrett" icon="col-xs-2 fa fa-linkedin" />
          <SocialIcon url="gmail" icon="col-xs-2 fa fa-google" />
        </div>
      </div>
      <div className='row'>
        <div className="col-xs-6 col-xs-offset-6">
        <Menu />
        </div>
    </div>
    </div>
  );
}
});


module.exports = Header;
