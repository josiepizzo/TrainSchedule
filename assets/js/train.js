$( document ).ready(function() {
    console.log( "ready!" );

// ========================================== START CODING BELOW!!
	// **** Created Reference to Firebase Database
	var trainData = new Firebase("https://anytimetrain.firebaseio.com");

$('#trainUser').on('click', function(){
	//select id for input fields
	var trainNameinput = $ ('#trainNameinput').val();
	var destinationinput = $ ('#destinationinput').val();
	var firstTraininput = $ ('#firstTraininput').val();
	var frequencyinput = $ ('#frequencyinput').val();
	console.log("hello")

	trainData.push({
		trainNameinput: trainNameinput,
		destinationinput: destinationinput,
		firstTraininput: firstTraininput,
		frequencyinput: frequencyinput,
		dateAdded: Firebase.ServerValue.TIMESTAMP

	})

})



alert("hello")

	});