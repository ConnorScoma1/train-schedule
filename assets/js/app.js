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

  // Sumbit Button Function
  $("#btn-add").on("click", function(event) {
  event.preventDefault()

    // Setting Varibles for input fields
  var name = $("#train-name").val().trim()
  var destination = $("#train-destination").val().trim()
  var time = $("#train-time").val().trim()
  var frequency = $("#time-freq").val().trim()

    // setting train to DB varibles
  var addingTrainToDB = {
    name: name,
    destination: destination,
    time: time,
    frequency: frequency
  }

    // Sending train to DB
  database.ref().push(addingTrainToDB)


})

// Getting Firebase Call Back

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

    // calling var values
  var name = childSnapshot.val().name
  var destination = childSnapshot.val().destination
  var time = childSnapshot.val().time
  var frequency = childSnapshot.val().frequency

    // setting new varible with DOM elements
  var appendNewTrainToDOM = $('<tr>').prepend(
    $('<td>').text(name),
    $('<td>').text(destination),
    $('<td>').text(time),
    $('<td>').text(frequency)
  )

  // appending new Dom elements
  $("#table").append(appendNewTrainToDOM)

})