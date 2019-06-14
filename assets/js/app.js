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
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  console.log(database)

  $("#btn-add").on("click", function(event) {
  event.preventDefault();

  var name = $("#train-name").val().trim();
  var destination = $("#train-destination").val().trim();
  var time = $("#train-time").val().trim();
  var frequency = $("#time-freq").val().trim();

  var addingTrainToDB = {
    name: name,
    destination: destination,
    time: time,
    frequency: frequency
  }

  database.ref().push(addingTrainToDB)

})
