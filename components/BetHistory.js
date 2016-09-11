/**
  History of Bets with a user
**/
var React = require('react');
var FeedPost = require('./FeedPost.js');

var BetHistory = React.createClass({

  propTypes: {
    personA: React.PropTypes.string.isRequired,
    personB: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      bets: [
        { userA: this.props.personA, userB: this.props.personB },
        { userA: this.props.personA, userB: this.props.personB },
        { userA: this.props.personA, userB: this.props.personB },
        { userA: this.props.personA, userB: this.props.personB }
      ]
    };
  },

  render: function() {
    var betList = [];
    for (let i = 0; i < this.state.bets.length; i++) {
      betList.push(<FeedPost userA={this.state.bets[i].userA} userB={this.state.bets[i].userB} key={i} noPic />);
    }
    var imageA = 'images/users/' + this.props.personA + '.jpg';
    var imageB = 'images/users/' + this.props.personB + '.jpg';
    return (
      <div>
        <div id="history-overview" className="row">
          <div className="col-xs-4">
            <p>{this.props.personA}</p><img src={imageA} />
          </div>
          <div className="col-xs-4"><p>vs</p><p id="net-points" className="ahead">+50 points</p></div>
          <div className="col-xs-4">
            <p>{this.props.personB}</p><img src={imageB} />
          </div>
        </div>
        {betList}
      </div>
    );
  }
});

module.exports = BetHistory;
