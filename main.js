var React = require('react');
var ReactDOM = require('react-dom');

var FeedPost = React.createClass({
  render: function() {
    return (
      <div className="feed-post">
        <div className="row">
          <div className="col-xs-4 personA">
            <img src="personA.jpeg" />
          </div>
          <div className="col-xs-4 betValue">
            <p className="bet-info">10 Points</p>
          </div>
          <div className="col-xs-4 personB">
            <img src="personB.jpeg" />
          </div>
        </div>
        <div className="row bet-lineup">
          <div className="col-xs-12">
            <p>Toby bet Rich that Dez Bryant gets less receiving yards than Golden Tate by end of game</p>
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

ReactDOM.render(<FeedPost />, document.getElementById('app'));
