export class GameObject implements Serializable {

    private _name: string;
    private _displayName: string;
    private _aliases: string[];
    private _shortDesc: string;
    private _longDesc: string;
	private _defaultResponse: string;
	private _verbMap: { [key:string]:string; } = {};

	constructor(){

	}

	getResponse(verb: string): string {
		if(this._verbMap[verb] != null){
			return this._verbMap[verb];
		}
		else{
			return this._defaultResponse;
		}
	}
    
    get Name(): string {
        return this._name;
    }

	get VerbMap(): { [key:string]:string; } {
		return this._verbMap;
	}

	get DefaultResponse(): string {
		return this._defaultResponse;
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

	serialize(): void {}

	deserialize(jsonTree: Object): void {
		this._name = this.getProperty(jsonTree, "name");
		this._displayName = this.getProperty(jsonTree, "displayName");
		this._aliases = this.getProperty(jsonTree, "aliases");
		this._shortDesc = this.getProperty(jsonTree, "shortDesc");
		this._longDesc = this.getProperty(jsonTree, "longDesc");
		this._defaultResponse = this.getProperty(jsonTree, "defaultResponse");
		this._verbMap = this.getProperty(jsonTree, "verbMap");
		for (let key in this._verbMap) {
			if(typeof key != "string")
				throw new Error("Invalid key type found in verbMap of " + typeof this + ". Expected string, got " + typeof key);
			else if(typeof this._verbMap[key] != "string" && this._verbMap[key] != null)
				throw new Error("Invalid value found in verbmap of " + typeof this + " for key: " + key + ". Expected string, got " + typeof this._verbMap[key]);
		}
	}
}

export interface Serializable {
	serialize(): void;
	deserialize(jsonTree: Object): void;
}
