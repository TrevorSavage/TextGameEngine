export class Serializable {

	constructor(jsonTree: Object) {
		if(jsonTree == null)
			throw new Error("Attempted initialization of '" + this.constructor.name + "' object with null null/undefined json object");
		this.deserialize(jsonTree);
	}

	serialize(): void {
		throw new Error("Method 'serialize' must be implemented in class '" + this.constructor.name + "'");
	}

	deserialize(jsonTree: Object): void {
		throw new Error("Method 'deserialize' must be implemented in class '" + this.constructor.name + "'");
	}

	getProperty(obj: any, prop: string, isNullable: boolean = false): any {
		let thisProp = "_" + prop;
		if(!obj.hasOwnProperty(prop))
			throw new ReferenceError("Property '" + prop + "' must be defined for " + this.constructor.name + " object");
		else if(!isNullable && (obj[prop] == undefined || obj[prop] == null))
			throw new ReferenceError("Property '" + prop + "' must be non-null for object " + this.constructor.name);
		else if(obj[prop] != null && (typeof obj[prop] != typeof this[thisProp]))
			throw new Error("Invalid type for property '" + prop + "' of " + this.constructor.name + ". Expected " + typeof this[thisProp] + ", got " + typeof obj[prop]);
		else
			return obj[prop];
	}
}