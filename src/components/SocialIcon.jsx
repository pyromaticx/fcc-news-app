var React = require('react');

var SocialIcon = React.createClass({
  componentWillMount: function() {
    var iconStyle = {
      fontSize: '30',
      color: '#fff',
      clear: 'bottom'
    }
    this.setState({iconStyle: iconStyle})
  },
  handleClick: function() {
    window.open(this.props.url, '_blank');
  },
  handleMouseOver: function() {
    this.setState({iconStyle:{ fontSize: '33'}});
  },
  handleMouseLeave: function() {
    this.setState({iconStyle: { fontSize: '30'}});
  },
  render: function() {

    return (
      <span style={this.state.iconStyle}
            className={this.props.icon}
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
            ></span>
    );
  }
});

module.exports = SocialIcon;
