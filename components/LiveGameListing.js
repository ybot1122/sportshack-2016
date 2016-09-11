/**
  List of live games
**/
var React = require('react');

var LiveGameListing = React.createClass({

  propTypes: {
    nextStep: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      games: [
        { home: 'Green Bay Packers', away: 'Minnesote Vikings', league: 'NFL' },
        { home: 'San Diego Chargers', away: 'Tampa Bay Buccaneers', league: 'NFL' },
        { home: 'Washington Redskins', away: 'Pittsburgh Steelers', league: 'NFL' },
        { home: 'Kansas City Royals', away: 'Seattle Mariners', league: 'MLB' },
        { home: 'Boston Red Sox', away: 'Cleveland Indians', league: 'MLB' },
      ]
    };
  },

  render: function() {
    var gameList = [];
    var games = this.state.games;
    for (let i = 0; i < games.length; i++) {
      gameList.push(
        <div>{games[i].league}: {games[i].home} vs {games[i].away}</div>
      );
    }
    return (
      <div id="live-game-list" className="row">
        {gameList}
      </div>
    );
  }
});

module.exports = LiveGameListing;
