/**
  Flow to handle a bet creation
**/
var React = require('react');
var FriendList = require('./FriendList.js');

var StartBet = React.createClass({

  /*
    Step 1: Select Friend
    Step 2: View History
    Step 3: Select Game
    Step 4: Enter Wizard
    Step 5: Confirmation!
  */

  getInitialState() {
    return { step: 1 };
  },

  render: function() {
    var activeComponent = null;

    switch(this.state.step) {
      case 1:
        activeComponent = <FriendList />;
        break;
      case 2:
        activeComponent = <h1>Bets Step 2</h1>;
        break;
      case 3:
        activeComponent = <h1>Bets Step 3</h1>;
        break;
      case 4:
        activeComponent = <h1>Bets Step 4</h1>;
        break;
      case 5:
        activeComponent = <h1>Bets Step 5</h1>;
        break;
      default:
        activeComponent = <h1>Bets Step 1</h1>;
    }

    return activeComponent;
  }
});

module.exports = StartBet;
