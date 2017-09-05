"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameObject {
    constructor() {
        this._verbMap = {};
    }
    getResponse(verb) {
        if (this._verbMap[verb] != null) {
            return this._verbMap[verb];
        }
        else {
            return this._defaultResponse;
        }
    }
    get Name() {
        return this._name;
    }
    get VerbMap() {
        return this._verbMap;
    }
    get DefaultResponse() {
        return this._defaultResponse;
    }
}
exports.GameObject = GameObject;
