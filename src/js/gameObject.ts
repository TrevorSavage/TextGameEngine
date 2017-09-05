module GameObject {
	export class GameObject {

	    private _name: string;
	    private _displayName: string;
	    private _aliases: string[];
	    private _shortDesc: string;
	    private _longDesc: string;
		private _verbMap: { [key:string]:string; } = {};
		private _defaultResponse: string;

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
	}
}
