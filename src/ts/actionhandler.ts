import { ParserResult } from "./inputparser";
import { GameInstance } from "./gameinstance";

export class ActionHandler {

	static specialVerbs: Object = {
		look: () => {
			return; 
		}
	}

	static takeAction (gi: GameInstance, pResult: ParserResult): string {
		let errResponse: string = "This input could not be parsed. Let's try that again.";
		let defaultResponse: string = "Generic response text. For testing, of course!";

		if (!pResult.isValid()) {
			return errResponse;
		}
		if (pResult.verb == "look") {
			console.log(gi.Rooms);
			console.log(gi.PlayerState);
			let room = gi.getRoomByName(gi.PlayerState.CurrentRoom);
			return room.LongDesc;
		}
		return defaultResponse;
	}

}