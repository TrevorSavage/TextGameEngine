import { GameObject } from "./gameobject";
import { AdjoiningRoomsMap } from "./adjoiningroomsmap"

	export class Room extends GameObject{

		private _adjoiningRooms: AdjoiningRoomsMap;

		constructor(name: string){
			super();
		}

		deserialize(jsonTree: Object): void {
			super.deserialize(jsonTree)
			this._adjoiningRooms = this.getProperty(jsonTree, "adjoiningRooms");
			for (let key in this._adjoiningRooms) {
				if(typeof key != "string")
					throw new Error("Invalid key type found in verbMap of " + typeof this + ". Expected string, got " + typeof key);
				else if(typeof this._adjoiningRooms[key] != "string" && this._adjoiningRooms[key] != null)
					throw new Error("Invalid value found in verbmap of " + typeof this + " for key: " + key + ". Expected string, got " + typeof this._adjoiningRooms[key]);
			}
		}
	}