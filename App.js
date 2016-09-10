/**
  Top-level component which has a state that can be changed to determine the page to show
**/
var React = require('react');
var Navigation = require('./Navigation.js');
var Feed = require('./Feed');

var App = React.createClass({

  getInitialState() {
    return { page: 'feed' };
  },

  // callback function for nav bar to change page
  changePage(pageName) {
    return () => this.setState({page: pageName});
  },

  render: function() {
    var activeComponent = null;

    switch(this.state.page) {
      case 'feed':
        activeComponent = <Feed />;
        break;
      case 'bet':
        activeComponent = <h1>Betting</h1>;
        break;
      default:
        activeComponent = <Feed />
    }

    return (
      <div>
        <Navigation navCallback={this.changePage} />
        {activeComponent}
      </div>
    );
  }
});

module.exports = App;
