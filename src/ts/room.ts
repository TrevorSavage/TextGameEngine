import { GameObject } from "./gameobject";
import { AdjoiningRoomsMap } from "./adjoiningroomsmap"
import { Npc } from "./npc"
import { GameInstance } from "./gameinstance"

export class Room extends GameObject{

	private _adjoiningRooms: AdjoiningRoomsMap;
	private _containedObjects: GameObject[];
	private _containedNpcs: Npc[];

	constructor(jsonTree: Object){
		super(jsonTree);
	}

	get AdjoiningRooms(): AdjoiningRoomsMap {
		return this._adjoiningRooms;
	}

	set AdjoiningRooms(value: AdjoiningRoomsMap) {
		this._adjoiningRooms = value;
	}

	get ContainedObjects(): GameObject[] {
		return this._containedObjects;
	}

	set ContainedObjects(value: GameObject[]) {
		this._containedObjects = value;
	}

	get ContainedNpcs(): Npc[] {
		return this._containedNpcs;
	}

	set ContainedNpcs(value: Npc[]) {
		this._containedNpcs = value;
	}

	deserialize(jsonTree: any): void {
		super.deserialize(jsonTree);
		this.ContainedObjects  = new Array<GameObject>();
		this.ContainedNpcs = new Array<Npc>();
		this._adjoiningRooms = new AdjoiningRoomsMap(jsonTree.adjoiningRooms);
		if (jsonTree.containedObjects == null)
			throw new Error("Property 'containedObjects' could not be found for room '" + this.Name + "'");
		for (let obj of jsonTree.containedObjects) {
			let objData = GameInstance.assetsObject.objects[obj];
			if (!objData)
				throw new Error("Object '" + obj + "' not found for room '" + this.Name + "'");
			this.ContainedObjects.push(new GameObject(objData));
		}
		if (jsonTree.containedNpcs == null)
			throw new Error("Property 'containedNpcs' could not be found for room '" + this.Name + "'");
		for (let npc of jsonTree.containedNpcs) {
			let npcData = GameInstance.assetsObject.objects[npc];
			if (!npcData)
				throw new Error("Npc '" + npc + "' not found for room '" + this.Name + "'");
			this.ContainedNpcs.push(new Npc(npcData));
		}
	}
}