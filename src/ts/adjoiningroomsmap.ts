
export class AdjoiningRoomsMap {
    north: string;
    south: string;
    east: string;
    west: string;
    up: string;
    down: string;

    constructor(north: string, south: string, east: string, west: string, up: string, down: string) {
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