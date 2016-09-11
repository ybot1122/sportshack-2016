/**
  This component represents a single feed posting that includes bet information
**/
var React = require('react');

var FeedPost = React.createClass({

  propTypes: {
    noPic: React.PropTypes.bool,

    userA: React.PropTypes.string,
    userB: React.PropTypes.string,
    subjectA: React.PropTypes.string,
    subjectB: React.PropTypes.string,
    comparator: React.PropTypes.string,
    statLine: React.PropTypes.string,
    betValue: React.PropTypes.number
  },

  descriptionGenerator: function() {
    return this.props.subjectA + " will have " + this.props.comparator
      + " " + this.props.statLine + " than " + this.props.subjectB;
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
            <p className="bet-info">{this.descriptionGenerator()}</p>
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
            <p>???</p>
          </div>
          <div className="col-xs-3">
            <p className="betValue">{this.props.subjectA}</p>
            <p>30 yards</p>
          </div>
          <div className="col-xs-3">
            <p className="betValue">{this.props.subjectB}</p>
            <p>15 yards</p>
          </div>
          <div className="col-xs-3">
            <p className="betValue">{this.props.betValue} points</p>
            <p>up for grabs</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeedPost;
