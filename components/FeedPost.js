/**
  This component represents a single feed posting that includes bet information
**/
var React = require('react');

var FeedPost = React.createClass({

  propTypes: {
    noPic: React.PropTypes.bool,
    userA: React.PropTypes.string,
    userB: React.PropTypes.string,
    betValue: React.PropTypes.number,
    // userA bet userB etc etc
    betDescription: React.PropTypes.string,
    // which game is it related to
    betGame: React.PropTypes.string,
    // the stat in consideration
    betStatline: React.PropTypes.string
  },

  render: function() {
    var image = null;
    if (!this.props.noPic) {
      var imageA = 'images/users/' + this.props.userA + '.jpg';
      var imageB = 'images/users/' + this.props.userB + '.jpg';
      image = (
        <div className="row">
          <div className="col-xs-2 personA">
            <img src={imageA} />
            <p>{this.props.userA}</p>
          </div>
          <div className="col-xs-8">
            <p className="bet-info">{this.props.betDescription}</p>
          </div>
          <div className="col-xs-2 personB">
            <img src={imageB} />
            <p>{this.props.userB}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="feed-post">
        {image}
        <div className="row live-preview">
          <div className="col-xs-3">
            <p>Dallas Cowboys vs Detroit Lions; Q1 12:50</p>
          </div>
          <div className="col-xs-3">
            <p className="betValue">Dez Bryant</p>
            <p>30 yards</p>
          </div>
          <div className="col-xs-3">
            <p className="betValue">Golden Tate</p>
            <p>15 yards</p>
          </div>
          <div className="col-xs-3">
            <p className="betValue">20 points</p>
            <p>up for grabs</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeedPost;
