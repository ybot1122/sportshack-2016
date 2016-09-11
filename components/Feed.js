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
        { userA: 'personA', userB: 'personB', subjectA: 'Sammy Watkins', subjectB: 'Steve Smith Sr', comparator: 'more', statLine: 'passing yards', betValue: 20, ongoing: true },
        { userA: 'personA', userB: 'personC', subjectA: 'Marcus Mariota', subjectB: 'Teddy Bridgewater', comparator: 'more', statLine: 'touchdowns', betValue: 50  },
        { userA: 'personD', userB: 'personA', subjectA: 'Danny Woodhead', subjectB: 'Charcandrick West', comparator: 'more', statLine: 'rushing yards', betValue: 100  },
        { userA: 'personA', userB: 'personB', subjectA: 'Tampa Bay Buccaneers', subjectB: 'Atlanta Falcons', comparator: 'more', statLine: 'interceptions', betValue: 50  },
        { userA: 'personF', userB: 'personA', subjectA: 'Terrelle Pryor', subjectB: 'Jordan Matthews', comparator: 'more', statLine: 'passing yards', betValue: 20  }
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
          subjectA={this.state.bets[i].subjectA}
          subjectB={this.state.bets[i].subjectB}
          comparator={this.state.bets[i].comparator}
          statLine={this.state.bets[i].statLine}
          betValue={this.state.bets[i].betValue}
          ongoing={this.state.bets[i].ongoing}
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
