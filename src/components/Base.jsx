var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Base = React.createClass({

  render: function() {
    var contentStyle = {
      marginTop: '-80',
      minHeight: '1000',
      background: 'linear-gradient(180deg, #0ad 0%, #0bd 50%, #0ad 100%)'
    };
    var footerStyle = {


    };

    return (
      <div>
        <Header />
          <div style={contentStyle}>
            {this.props.children}

          </div>
          <Footer />
      </div>
    );
  }
});

module.exports = Base;
