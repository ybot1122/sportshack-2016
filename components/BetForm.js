/**
  History of Bets with a user
**/
var React = require('react');
var patriotsID = "97354895-8c77-4fd4-a860-32e62ea7382a";
var cardinalsID = "de760528-1dc0-416a-a978-b510d20692ff";

var BetForm = React.createClass({

  propTypes: {
    gameId: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return { team1Players: [], team2Players: [] };
  },

  componentDidMount() {
    this.populateDropdowns();
  },

  populateDropdowns: function() {
    var r = this;
    var pats = $.ajax({
      url: "http://localhost:8000/nfl-ot1/teams/" + patriotsID + "/profile.json?api_key=bnuwzm9vktq7n3pkg5trpnb8", 
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        var playerRaw = response;
        var pats = [];
        for (var i = 0; i < playerRaw.players.length; i++) {
            if (playerRaw.players[i].position== "RB" || playerRaw.players[i].position == "TE" || playerRaw.players[i].position == "QB" || playerRaw.players[i].position == "WR") {
                pats.push(playerRaw.players[i].name);
            }
        }
        console.log(pats);

        setTimeout(() => {
          var cards = $.ajax({
            url: "http://localhost:8000/nfl-ot1/teams/" + cardinalsID + "/profile.json?api_key=bnuwzm9vktq7n3pkg5trpnb8", 
            type: 'GET',
            dataType: 'json',
            success: function(response) {
              var playerRaw = response;
              var cards = [];
              for (var i = 0; i < playerRaw.players.length; i++) {
                  if (playerRaw.players[i].position== "RB" || playerRaw.players[i].position == "TE" || playerRaw.players[i].position == "QB" || playerRaw.players[i].position == "WR") {
                      cards.push(playerRaw.players[i].name);
                  }
              }
              console.log(cards);

              r.setState({
                team1Players: pats, team2Players: cards
              });
            }
          });
        }, 1000);
      }
    });
  },

  renderPlayers(team) {
    var data = this.state[team];
    var options = [];
    for (let i = 0; i < data.length; i++) {
      options.push(<option key={i}>{data[i]}</option>);
    }
    return options;
  },

  render: function() {

    if (this.state.team1Players.length === 0) {
      return (
        <div id="bet-form" className="row">
          <img id="loader" src="./images/loader.gif" key="loader" />
        </div>
      );
    }

    return (
      <div id="bet-form" className="row">
        I bet that <select>{this.renderPlayers('team1Players')}</select> will have <select><option>more</option><option>less</option></select> <select><option>passing yards</option></select> than <select>{this.renderPlayers('team2Players')}</select>.
      </div>
    );
  }
});

module.exports = BetForm;
