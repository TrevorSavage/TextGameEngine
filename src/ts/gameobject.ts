import { Serializable } from "./serializable";
import { VerbAction } from "./verbaction";

export class GameObject extends Serializable {

    private _name: string = "";
    private _currentState: string = "";
    private _displayName: string = "";
    private _aliases: string[] = [];
    private _shortDesc: string = "";
    private _longDesc: string = "";
	private _defaultResponse: string = "";
	private _verbMap: VerbAction[];

	constructor(jsonTree: Object){
		super(jsonTree);
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

    set Name(value: string) {
    	this._name = value;
    }

    get DisplayName(): string {
        return this._displayName;
    }

    set DisplayName(value: string) {
    	this._displayName = value;
    }

	get VerbMap(): VerbAction[] {
		return this._verbMap;
	}

	get DefaultResponse(): string {
		return this._defaultResponse;
	}

	get ShortDesc(): string {
        return this._shortDesc;
    }

    set ShortDesc(value: string) {
    	this._shortDesc = value;
    }

    get LongDesc(): string {
        return this._longDesc;
    }

    set LongDesc(value: string) {
    	this._longDesc = value;
    }

	serialize(): void {}

	deserialize(jsonTree: any): void {
		this._name = this.getProperty(jsonTree, "name");
		this._currentState = this.getProperty(jsonTree, "currentState");
		this._displayName = this.getProperty(jsonTree, "displayName");
		this._aliases = this.getProperty(jsonTree, "aliases");
		this._shortDesc = this.getProperty(jsonTree, "shortDesc");
		this._longDesc = this.getProperty(jsonTree, "longDesc");
		this._defaultResponse = this.getProperty(jsonTree, "defaultResponse");
		for (let vm of jsonTree["verbMap"]){
			this._verbMap.push(new VerbAction(vm));
		}
	}
}
