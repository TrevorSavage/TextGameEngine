import { Serializable } from "./serializable";

export class PlayerState extends Serializable{

	private _name: string = "";
	private _money: number = 0;
	private _currentRoom: string = "";
	
	constructor(jsonTree: Object) {
		super(jsonTree);
	}

	get Name(): string {
		return this._name;
	}

	set Name(value: string) {
		this._name = value;
	}

	get Money(): number {
		return this._money;
	}

	set Money(value: number) {
		this._money = value;
	}

	get CurrentRoom(): string {
		return this._currentRoom;
	}

	set CurrentRoom(value: string) {
		this._currentRoom = value;
	}

	serialize() {}

	deserialize(jsonTree: Object) {
		this._name = this.getProperty(jsonTree, "name");
		this._money = this.getProperty(jsonTree, "money");
		this._currentRoom = this.getProperty(jsonTree, "currentRoom");
	}
}