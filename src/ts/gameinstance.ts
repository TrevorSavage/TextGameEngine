import { GameObject } from "./gameobject";
import { Room } from "./room";
import { PlayerState } from "./playerstate";
import { JsonImporter } from "./jsonImporter";

export class GameInstance {

	private _rooms: Room[];
	private _playerState: PlayerState;
	static assetsObject: any = null;

	constructor() {
		this._rooms = new Array<Room>();
	}

	get Rooms(): Room[] {
		return this._rooms;
	}

	set Rooms(value: Room[]) {
		this._rooms = value;
	}

	getRoomByName(name: string) {
		for (let room of this.Rooms) {
			if (room.Name == name)
				return room;
		}
	}

	get PlayerState(): PlayerState {
		return this._playerState;
	}

	set PlayerState(value: PlayerState) {
		this._playerState = value;
	}

	initFromAssets(assetRoot: string) {
		GameInstance.assetsObject = JsonImporter.importJsonDirectory(assetRoot, true);

		//just need to worry about importing and adding rooms objects here. Each room is responsible for instantiating it's own objects and NPCs
		if (GameInstance.assetsObject.rooms) {
			for (let r in GameInstance.assetsObject.rooms) {
				let roomData = GameInstance.assetsObject.rooms[r];
				let room = new Room(roomData);
				this._rooms.push(room);
			}
		}
		else {
			throw new Error("required directory 'rooms' missing from asset root")
		}
		if (GameInstance.assetsObject.player) {
			this.PlayerState = new PlayerState(GameInstance.assetsObject.player);
		}
		else {
			throw new Error("required file 'player.json' missing from asset root")
		}
	}
	
}