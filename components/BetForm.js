/**
  History of Bets with a user
**/
var React = require('react');

var BetForm = React.createClass({

  propTypes: {
    gameId: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <div id="bet-form" className="row">

        I bet that <select><option>Russell Wilson</option></select> will have <select><option>more</option><option>less</option></select> 
        <select><option>passing yards</option></select> than <select><option>Matt Forte</option></select>.

      </div>
    );
  }
});

module.exports = BetForm;
