"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdjoiningRoomsMap {
    constructor(north, south, east, west, up, down) {
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
