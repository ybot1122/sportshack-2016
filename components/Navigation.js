/**
  nav bar
**/
var React = require('react');

var Navigation = React.createClass({

  // feed | bet | leader | profile

  propTypes: {
    navCallback: React.PropTypes.func.isRequired,
    currPage: React.PropTypes.string.isRequired
  },

  getClassName: function(linkTo) {
    if (linkTo === this.props.currPage) {
      return 'col-xs-3 activeNav';
    } else {
      return 'col-xs-3';
    }
  },

  render: function() {
    return (
      <div id="navigation" className="row">
        <div className="col-xs-3" className={this.getClassName('bet')} onClick={this.props.navCallback('bet')}>Start A Bet</div>
        <div className="col-xs-3" className={this.getClassName('leader')}>Leaderboard</div>
        <div className="col-xs-3" className={this.getClassName('feed')}>Live Feed</div>
        <div className="col-xs-3" className={this.getClassName('profile')}>Profile</div>
      </div>
    );
  }
});

module.exports = Navigation;
