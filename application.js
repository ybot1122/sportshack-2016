'use strict';

var placeBetButton = document.getElementById('place-bet-button');
var signInButton = document.getElementById('sign-in-button');
var signOutButton = document.getElementById('sign-out-button');
var activeGameArray = []
var userBets = []

var authRef = firebase.auth();

var email = 'joshuamielke@gmail.com';
var password = 'seattlesportshackathon';

//function getData() {
//   var data = $.ajax({
//       url: 'http://localhost:8000/nfl-t1/2015/PST/1/SEA/MIN/pbp.json?api_key=kkapenthwjg6gh22f9yb64v6', 
//       type: 'GET',
//       dataType: 'json',
//       success: function(response) {     
//         console.log(response);
//       },
//       complete: function() {
//         console.log('complete');
//       }
//   });
// }// 

function getActiveGames() {
  var data = $.ajax({
    url: 'http://localhost:8000/nfl-t1/2016/REG/1/schedule.json?api_key=kkapenthwjg6gh22f9yb64v6', 
    type: 'GET',
    dataType: 'json',
    success: function(response) {    
      var games = response.games;
      for (var game in games) {
        if (games[game].status == 'inprogress') {
          activeGameArray.push(games[game].id);
        }
      }
    }
  });
}

function getUserBets() {
  var betsRef = firebase.database().ref('User-Bets/');
  betsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      if (childSnapshot.key == firebase.auth().currentUser.uid) {
        var bet = [];
        childSnapshot.forEach(function(child2Snapshot) {
          var betItem = [
                        child2Snapshot.child('Opponent').val(), 
                        child2Snapshot.child('Comparator').val(),
                        child2Snapshot.child('Condition1').val(),
                        child2Snapshot.child('Condition2').val(),
                        child2Snapshot.child('GameTime').val(),
                        child2Snapshot.child('IsAccepted').val(),
                        child2Snapshot.child('IsCompleted').val(),
                        child2Snapshot.child('Outcome').val(),
                        child2Snapshot.child('Statistic').val()
                        ];
          bet.push(betItem);
        });
        userBets.push(bet)
      }
    });
  });
}

function createNewUser(email, password) {
  //Also signs the User in
  authRef.createUserWithEmailAndPassword(email, password);
}

function signIn(email, password) {
  authRef.signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + errorMessage)
  });
}

function signOut() {
  authRef.signOut();
}

function onAuthStateChanged() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}

function createBet(betValue, comp, cond1, cond2, gameID, time, isAccepted, opponentID, opponentName, outcome, stat) {
  var userId = firebase.auth().currentUser.uid

  var betData = {
    BetValue: betValue
    , Comparator: comp
    , UserID: userId
    , GameID: gameID
    , Condition1: cond1
    , Condition2: cond2
    , GameTime: time
    , IsAccepted: isAccepted
    , Opponent: opponentID
    , OpponentName: opponentName
    , Outcome: outcome
    , Statistic: stat
  };

  console.log(betData);

  var newBetKey = firebase.database().ref().child('Bets').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/Bets/' + newBetKey] = betData;
  updates['/User-Bets/' + userId + '/' + newBetKey] = betData;

  console.log("Attempting to update the firebase database...");

  return firebase.database().ref().update(updates);
}

// Bindings on load.
window.addEventListener('load', function() {
  // // Bind Sign in button.
  // signInButton.addEventListener('click', function() {
  //   signIn();
  // });

  // // Bind Sign out button.
  // signOutButton.addEventListener('click', function() {
  //   signOut();
  // });

  placeBetButton.addEventListener("click", function() {
    createBet('PASS IN ALL PARAMETERS FROM THE FORM HERE');
  });

  // Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

}, false);

signIn(email, password);
getActiveGames();
console.log(activeGameArray);
getUserBets();
console.log(userBets);