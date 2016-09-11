/**
  List of live games
**/
var React = require('react');

var LiveGameListing = React.createClass({

  propTypes: {
    nextStep: React.PropTypes.func.isRequired,
    friend: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      games: [
        { home: 'Green Bay Packers', away: 'Minnesote Vikings', league: 'NFL', gid: 1 },
        { home: 'San Diego Chargers', away: 'Tampa Bay Buccaneers', league: 'NFL', gid: 2 },
        { home: 'Washington Redskins', away: 'Pittsburgh Steelers', league: 'NFL', gid: 3 },
        { home: 'Kansas City Royals', away: 'Seattle Mariners', league: 'MLB', gid: 4 },
        { home: 'Boston Red Sox', away: 'Cleveland Indians', league: 'MLB', gid: 5 },
      ]
    };
  },

  generateNext: function(gameId) {
    return () => this.props.nextStep(gameId);
  },

  render: function() {
    var gameList = [];
    var games = this.state.games;
    for (let i = 0; i < games.length; i++) {
      gameList.push(
        <div className="livegame" onClick={this.generateNext(games[i].gid)}>{games[i].league}: {games[i].home} vs {games[i].away}</div>
      );
    }
    return (
      <div id="live-game-list">
        {gameList}
      </div>
    );
  }
});

module.exports = LiveGameListing;
