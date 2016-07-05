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
});

