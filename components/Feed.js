/**
  Top-level component for the bets feed
**/
var React = require('react');
var FeedPost = require('./FeedPost.js');

var Feed = React.createClass({
  propTypes: {
    userA: React.PropTypes.string
  },

  getInitialState() {
    return {
      bets: [
        { userA: 'personA', userB: 'personB' },
        { userA: 'personA', userB: 'personC' },
        { userA: 'personD', userB: 'personA' },
        { userA: 'personA', userB: 'personB' },
        { userA: 'personF', userB: 'personA' }
      ]
    }
  },

  render: function() {
    var betList = [];
    for (let i = 0; i < this.state.bets.length; i++) {
      betList.push(
        <FeedPost
          userA={this.state.bets[i].userA}
          userB={this.state.bets[i].userB}
          betDescription="Aaron Rodgers throws more passes than Drew Brees by the 3rd quarter"
          key={i} />
      );
    }
    return (
      <div id="bet-feed">
        {betList}
      </div>
    );
  }
});

module.exports = Feed;
