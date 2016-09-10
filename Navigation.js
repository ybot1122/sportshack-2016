/**
  nav bar
**/
var React = require('react');

var Navigation = React.createClass({

  propTypes: {
    navCallback: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div id="navigation" className="row">
        <div className="col-xs-6" onClick={this.props.navCallback('bet')}>Start A Bet</div>
        <div className="col-xs-6" onClick={this.props.navCallback('feed')}>View Feed</div>
      </div>
    );
  }
});

module.exports = Navigation;
