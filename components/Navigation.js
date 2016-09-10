/**
  nav bar
**/
var React = require('react');

var Navigation = React.createClass({

  propTypes: {
    navCallback: React.PropTypes.func.isRequired,
    currPage: React.PropTypes.string.isRequired
  },

  render: function() {
    if (this.props.currPage === 'feed') {
      return (<div id="navigation" className="row">
        <div className="col-xs-12" onClick={this.props.navCallback('bet')}>Start A Bet</div>
      </div>);
    } else {
      return (<div id="navigation" className="row">
        <div className="col-xs-12" onClick={this.props.navCallback('feed')}>Back to Feed</div>
      </div>);
    }
  }
});

module.exports = Navigation;
