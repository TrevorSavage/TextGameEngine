import { ArrayHelper } from "./arrayhelper";

export class InputParser {

	static ignoredTokens = ["the", "a", "an", "my", "his"];
	static conjunctions = ["and", ","];
	static prepositions = ["in", "to", "on", "over", "through", "beside", "behind", "around"]

	static parse(input: string): Object{
		let tokens = input.split(" ");
		let result: ParserResult = new ParserResult();

		//parses input according to the following pattern:
		//verb : string
		//ignored: one of the ignored tokens above
		//noun: string
		//preposition: one of the prepositions above
		//
		//verb [ignored* noun ignored* [preposition ignored* noun]]
		if(tokens.length <= 0)
			return result;
		result.verb = tokens.shift();
		while(tokens.length > 0 && ArrayHelper.includes(InputParser.ignoredTokens, tokens[0])){
			tokens.shift();
		}
		if(tokens.length <= 0)
			return result;
		result.nounOne = tokens.shift();
		while(tokens.length > 0 && ArrayHelper.includes(InputParser.ignoredTokens, tokens[0])){
			tokens.shift();
		}
		if(tokens.length > 0 && ArrayHelper.includes(InputParser.prepositions, tokens[0])){
			result.prep = tokens.shift();
			while(tokens.length > 0 && ArrayHelper.includes(InputParser.ignoredTokens, tokens[0])){
				tokens.shift();
			}
			if(tokens.length > 0)
				result.nounTwo = tokens.shift();
		}

		return result;
	}
}

export class ParserResult {
	verb: string = null;
	nounOne: string = null;
	prep: string = null;
	nounTwo: string = null;
	isValid(): boolean {
		if(this.verb){
			if (this.nounOne) {
				if(!!this.prep == !!this.nounTwo)
				return true;
			}
			else
				return true;
		}
		return false;
	}
	isSimple(): boolean {
		if (this.prep && this.nounTwo)
			return true;
		return false;
	}
	toString(): string{
		return (this.verb + " " + this.nounOne + " " + this.prep + " " + this.nounTwo);
	}
}