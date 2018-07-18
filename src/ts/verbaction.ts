import { Serializable } from "./serializable";

export class VerbAction extends Serializable {
	
	private _verb: string;
	//mappings from a state to a response. The state should correspond to the parent's current stored state
	private _stateResponses: Object[];
	//mappings from one state to another. Defines transitions between states when this verb is used
	private _stateTransitions: Object[];

	get Verb() {
		return this._verb;
	}

	get StateResponses() {
		return this._stateResponses;
	}

	get StateTransitions() {
		return this._stateTransitions;
	}

	serialize(): void {}

	deserialize(jsonTree: any): void {
		this._verb = this.getProperty(jsonTree, "verb");
		for (let )
	}
}