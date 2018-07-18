import { GameInstance } from "./gameinstance";
import { InputParser } from "./inputparser";
import { ActionHandler } from "./actionhandler";

let $ = require("jquery");

$(document).ready(function(){

	let gi = new GameInstance();
	gi.initFromAssets("assets/HPAssets");

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
			return ActionHandler.takeAction(gi, parseResult);
		}
		else return "INCORRECT: " + parseResult.toString();

	}
});