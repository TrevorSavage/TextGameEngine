import { GameInstance } from "./gameinstance";
import { InputParser } from "./inputparser";

var $ = require("jquery");

$(document).ready(function(){

	let gi = new GameInstance("HPAssets");

	$('#mainInput').bind("enterKey",function(e, inputVal){
	   	let pResult = InputParser.parse(inputVal);
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
			//TODO: replace this placeholder logic
			let outputString = parseResult.verb + " " + parseResult.nounOne;
			if(parseResult.prep != null && parseResult.nounTwo != null){
				let partTwo = " " + parseResult.prep + " " + parseResult.nounTwo
				outputString += partTwo;
			}
			return outputString;
		}
		else return "INCORRECT: " + parseResult.toString();

	}
});