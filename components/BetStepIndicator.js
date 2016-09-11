/**
  Bet Step Indicator
**/
var React = require('react');

var BetStepIndicator = React.createClass({
  propTypes: {
    currStep: React.PropTypes.number
  },

  getDirections: function() {
    switch(this.props.currStep) {
      case 1:
        return "Who do you want to challenge?";
      case 2:
        return "";
      case 3:
        return "Which game?";
      case 4:
        return "Player, stats, and value";
      case 5:
        return "Confirmed!";
      default:
        return "broke"      
    }
  },

  render: function() {
    var steps = [];
    for (let i = 1; i <= 5; i++) {
      var cname = 'step';
      if (this.props.currStep >= i) {
        cname += ' active';
      }
      steps.push(<div className={cname} key={i}>{i}</div>);
    }

    var lastStep = (this.props.currStep > 1) ? <a onClick={this.props.prevStep} style={{cursor: 'pointer'}}>Go Back</a> : null;

    return (
      <div id="bet-step-indicator">
        {steps}
        <div className="instructions">{this.getDirections()} {lastStep}</div>
      </div>
    );
  }
});

module.exports = BetStepIndicator;
