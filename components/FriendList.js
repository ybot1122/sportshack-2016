/**
  Flow to handle a bet creation
**/
var React = require('react');

var FriendList = React.createClass({

  propTypes: {
    nextStep: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      friends: [
        { name: 'PersonB', differential: 20, ahead: true },
        { name: 'PersonC', differential: 40, ahead: true },
        { name: 'PersonD', differential: -10, ahead: false },
        { name: 'PersonE', differential: 25, ahead: true },
        { name: 'PersonF', differential: 0, ahead: false, hasNotBet: true }
      ]
    };
  },

  render: function() {
    var friendsDom = [];
    var friends = this.state.friends;
    for (let i = 0; i < friends.length; i++) {
      var cname = (friends[i].ahead === true) ? 'ahead' : 'behind';
      var clickCallback = () => this.props.nextStep({friend: friends[i]});
      friendsDom.push(
        <div className="row friend" onClick={clickCallback} key={i}>
          <div className="col-xs-3" style={{paddingLeft: '0px'}}>
            <img src={"images/users/" + friends[i].name + ".jpg"} />
          </div>
          <div className="col-xs-6 friendName">
            <p>{friends[i].name}</p>
          </div>
          <div className="col-xs-3 friendPoints">
            <p className={cname}>{friends[i].differential} points</p>
          </div>
        </div>
      );
    }
    return <div id="friendsList">{friendsDom}</div>;
  }
});

module.exports = FriendList;
