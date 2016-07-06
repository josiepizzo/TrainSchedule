$( document ).ready(function() {
    console.log( "ready!" );

// ========================================== START CODING BELOW!!
	// **** Created Reference to Firebase Database
	var trainData = new Firebase("https://anytimetrain.firebaseio.com");

$("#addTrainBtn").on("click", function(){
	//select id for input fields
	var trainName = $("#trainNameInput").val();
	var destination = $("#destinationInput").val();
	var firstTrain = moment($("#firstTrainInput").val(),"HH:mm").subtract(10, "years").format("X");
	var frequency = $("#frequencyInput").val();

	//creates temporary object to hold train data
	var newTrain = {
		name: trainName,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency
	}

	//Uploads train data to Firebase
	trainData.ref().push(newTrain);

	//Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(firstTrain);
	console.log(newTrain.frequency)

	//Alert
	alert("Train Added");

	//Clears all of the text in table
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainInput").val("");
	$("#frequencyInput").val("");

	//Determines when the next train arrives
	return false;
});

//Adding trains to the database and in the rows of html when the user adds an entry
trainData.ref().on("child_added", function(childSnapShot, prevChildKey){

	console.log(childSnapShot.val());

//data stored in a variable

var tName = childSnapShot.val().name;
var tDestination = childSnapShot.val().destination;
var tFrequency = childSnapShot.val().frequency;
var tFirstTrain = childSnapShot.val().firstTrain;

//Calculations of train minutes till arrival, the the current time and subtract the FirstTrain time and find the modulus between the difference and the frequency
var differenceTimes = moment().diff(moment.unix(tFirstTrain),"minutes");
var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency;
var tMinutes = tFrequency - tRemainder;

//Calculate the arrival time, add the tMinutes to the current time
var tArrival = moment().add(tMinutes, "m").format("hh:mm A");
console.log(tMinutes);
console.log(tArrival);

console.log(moment().format("hh:mm A"));
console.log(tArrival);
console.log(moment().format("X"));

//Adding each train data to the table
$("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");

	});
});

