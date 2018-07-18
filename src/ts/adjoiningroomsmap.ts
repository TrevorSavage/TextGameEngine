import { Serializable } from "./serializable";
import { GameObject } from "./gameobject";

export class AdjoiningRoomsMap extends Serializable {
    private _north: string = "";
    private _south: string = "";
    private _east: string = "";
    private _west: string = "";
    private _up: string = "";
    private _down: string = "";

    constructor(jsonTree: Object) {
        super(jsonTree);
    }

    get North(): string {
        return this._north;
    }

    set North(value: string) {
        this._north = value;
    }

    get South(): string {
        return this._south;
    }

    set South(value: string) {
        this._south = value;
    }

    get East(): string {
        return this._east;
    }

    set East(value: string) {
        this._east = value;
    }

    get West(): string {
        return this._west;
    }

    set West(value: string) {
        this._west = value;
    }

    get Up(): string {
        return this._up;
    }

    set Up(value: string) {
        this._up = value;
    }

    get Down(): string {
        return this._down;
    }

    set Down(value: string) {
        this._down = value;
    }

    serialize() {}

    deserialize(jsonTree: any): void {
        let isNullable = true;
        this.North = this.getProperty(jsonTree, "north", isNullable);
        this.South = this.getProperty(jsonTree, "south", isNullable);
        this.East = this.getProperty(jsonTree, "east", isNullable);
        this.West = this.getProperty(jsonTree, "west", isNullable);
        this.Up = this.getProperty(jsonTree, "up", isNullable);
        this.Down = this.getProperty(jsonTree, "down", isNullable);
    }
}