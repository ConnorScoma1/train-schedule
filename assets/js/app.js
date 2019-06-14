// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaCRv6ytFs3rOkr2wSwhbmp2ikMEWlQDs",
    authDomain: "train-db032.firebaseapp.com",
    databaseURL: "https://train-db032.firebaseio.com",
    projectId: "train-db032",
    storageBucket: "train-db032.appspot.com",
    messagingSenderId: "1074719918303",
    appId: "1:1074719918303:web:781a2bbc17c20eb4"
  };
  // Initialize Firebase
  
  var database = firebase.database();

  $("#submit").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-name").val().trim();
  var destination = $("#train-destination").val().trim();
  var trainTime = $("#train-time").val().trim();
  var frequency = $("#time-freq").val().trim();


  console.log(trainName)

})
