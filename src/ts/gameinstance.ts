import { GameObject } from "./gameobject";
import { Room } from "./room";
import { PlayerState } from "./playerstate";
import { JsonImporter } from "./jsonImporter";

export class GameInstance {

	private rooms: Room[];
	private playerState: PlayerState;

	constructor(assetRoot: string) {
		this.rooms = new Array<Room>();
		this.playerState = new PlayerState();
		this.initFromAssets(assetRoot);
	}

	async initFromAssets(assetRoot: string) {
		//find file location for rooms json files and import them

		//find file location for objects json files and import them

		//find file location for npc json files and import them

		//this is placeholder stuff for testing
		let newRoom = await JsonImporter.import(Room, "../HPAssets/rooms/testRoom.json");
		let newObj = await JsonImporter.import(GameObject, "../HPAssets/objects/sock.json");
	}

	takeAction (verb: string, nounOne: string, nounTwo: string) {

	}
}