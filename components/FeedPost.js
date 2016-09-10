/**
  This component represents a single feed posting that includes bet information
**/
var React = require('react');

var FeedPost = React.createClass({

  propTypes: {
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
    var imageA = 'images/users/' + this.props.userA + '.jpg';
    var imageB = 'images/users/' + this.props.userB + '.jpg';
    return (
      <div className="feed-post">
        <div className="row">
          <div className="col-xs-4 personA">
            <img src={imageA} />
          </div>
          <div className="col-xs-4 betValue">
            <p className="bet-info">10 Points</p>
          </div>
          <div className="col-xs-4 personB">
            <img src={imageB} />
          </div>
        </div>
        <div className="row bet-lineup">
          <div className="col-xs-12">
            <p>{this.props.betDescription}</p>
          </div>
        </div>
        <div className="row live-preview">
          <div className="col-xs-12">
            <p>Dallas Cowboys @ Detroit Lions; Q1 12:50</p>
            <p>Dez Bryant: 30 yds; Golden Tate: 15 yds</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeedPost;
