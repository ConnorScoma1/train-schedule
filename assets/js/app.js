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

  var trainName=$("#train-name").val().trim();
  var destination=$("#train-destination").val().trim();
  var firstTrain=$("#train-time").val().trim();
  var frequency=$("#time-freq").val().trim();


  console.log(trainName)

  var newTrain = {
    name: trainName,
    destination: destination,
    fisrtTrain: firstTrain,
    frequency: frequency,
  };


  database.ref().push(newTrain);
//puts user input for time into HH:mm
var inputFormat = "HH:mm"
var convertedDate = moment(firstTrain, inputFormat);

console.log(convertedDate.format("HH:mm"));

//converted date is first train
var trainFrequency= frequency;

//current time in HH:mm format
var currentTime = moment().format("HH:mm");

console.log(currentTime)

var diffTime = moment().diff(moment(convertedDate), "minutes");

console.log(diffTime)

var trainRemainder = diffTime % trainFrequency;

console.log(trainRemainder)
var minutesTillTrain = trainFrequency - trainRemainder;
console.log(minutesTillTrain)
var nextTrain = moment().add(minutesTillTrain, "minutes");
var nextTrainDom=moment(nextTrain).format("hh:mm")
    console.log(nextTrainDom)
  database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
 
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var frequency = childSnapshot.val().frequency;
  var firstTrain = childSnapshot.val().firstTrain;
});
  
 
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextTrainDom),
    $("<td>").text(minutesTillTrain),
  
  );
  // Append the new row to the table
  $("#table > tbody").append(newRow);
})
