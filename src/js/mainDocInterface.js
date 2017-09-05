$(document).ready(function(){
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		JsonImporter.JsonImporter.import(GameObject.GameObject, "src/json/sock.json");
	} else {
	  	alert('The File APIs are not fully supported in this browser.');
	}

	$('#mainInput').bind("enterKey",function(e, inputVal){
		console.log(InputParser);
	   	var pResult = InputParser.InputParser.parse(inputVal);
	   	$('#mainOutput').text(formatOutput(pResult));
	});

	$('#mainInput').keyup(function(e){
	    if(e.keyCode == 13)
	    {
	        $(this).trigger("enterKey", $(this).val());
	    }
	});

	function formatOutput(parseResult) {
		if(parseResult.isValid()){
			var outputString = parseResult.verb + " " + parseResult.nounOne;
			if(parseResult.prep != null && parseResult.nounTwo != null){
				var partTwo = " " + parseResult.prep + " " + parseResult.nounTwo
				outputString += partTwo;
			}
			return outputString;
		}
		else return "INCORRECT: " + parseResult.toString();

	}
});