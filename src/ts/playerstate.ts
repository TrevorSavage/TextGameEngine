import { Serializable } from "./gameObject"

export class PlayerState implements Serializable{

	private _name: string;
	private _money: number;
	private _currentRoomId: number;
	
	constructor() {}

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

	get CurrentRoomId(): number {
		return this._currentRoomId;
	}

	set CurrentRoomId(value: number) {
		this._currentRoomId = value;
	}

	serialize() {}

	deserialize(jsonTree: Object) {
		this._name = this.getProperty(jsonTree, "name");
		this._money = this.getProperty(jsonTree, "money");
		this._currentRoomId = this.getProperty(jsonTree, "currentRoomId");
	}

	protected getProperty(obj: Object, prop: string): any {
		if(!obj.hasOwnProperty(prop))
			throw new ReferenceError("Property " + prop + " not found for " + typeof this + " object");
		else if(obj[prop] == undefined || obj[prop] == null)
			throw new ReferenceError("Property " + prop + " must be defined for object " + typeof this);
		else if(typeof obj[prop] != typeof this[prop])
			throw new Error("Invalid type for property " + prop + " of " + typeof this + ". Expected " + typeof this[prop] + ", got " + typeof obj[prop]);
		else
			return obj[prop];
	}
}