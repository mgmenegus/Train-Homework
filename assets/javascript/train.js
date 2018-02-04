$( document ).ready(function() {
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBVzO9ZV2Ex5xtVBL_eT2qUM2YvKKtNA4k",
      authDomain: "train-homework-d47b5.firebaseapp.com",
      databaseURL: "https://train-homework-d47b5.firebaseio.com",
      projectId: "train-homework-d47b5",
      storageBucket: "",
      messagingSenderId: "460730571628"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";
  var mAway = "";
  $("#train-add").on("click", function() {
      event.preventDefault();
      console.log("hell yeah")
      trainName = $("#train-name").val().trim();
      destination = $("#train-role").val().trim();
      firstTrain = $("#first-start-date").val().trim();
      frequency = $("#frequency-rate").val().trim();
      database.ref().push({
          trainName: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

  })

  function getArrival(){
     For (firstTrain = i | i = i + frequency| nArri < frequency);
     nArri = firstTrain + i;
     $.inBetween(firstTrain, nArri);
       } 
      }
      
  }
  function calcTime(date) {
      return moment().endOf('day').fromNow();  
  };
  database.ref().on("child_added", function(childSnapshot) {
      //add childSnapshot to table
      var newTrain = childSnapshot.val();
      console.log(newTrain);
      var table = $("#train");
      var newRow = $("<tr>")
      var nName = $("<td>").text(newTrain.trainName);
      var nDest = $("<td>").text(newTrain.destination);
      var nsTime = $("<td>").text(newTrain.firstTrain);
      var nFreq = $("<td>").text(newTrain.frequency);
      var nArri = $("<td>").text(newTrain.nextArrival);
      var nMin = $("<td>").text(calcTime(newTrain.sDate) * newTrain.rate);
      table.append(newRow).append(nName).append(nDest).append(nsTime).append(nFreq).append(nArri).append(nMin);
  })

});