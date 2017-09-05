import {Room} from "./room";

class AdjoiningRoomsMap {
    north: Room;
    south: Room;
    east: Room;
    west: Room;
    up: Room;
    down: Room;

    constructor(north: Room, south: Room, east: Room, west: Room, up: Room, down: Room) {
    	this.north = north;
    	this.south = south;
    	this.east = east;
    	this.west = west;
    	this.up = up;
    	this.down = down;
    }

    constructRoomsMapWithNullRefs() {
    	return new AdjoiningRoomsMap(null, null, null, null, null, null);
    }
}