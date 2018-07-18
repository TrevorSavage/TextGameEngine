import { Room } from "./room";
let fs = require('fs');

export class JsonImporter {
	//returns a json structure for all files found in the provided directory and optionally any within all child directories
	static importJsonDirectory(rootPath: string, recursive: boolean): any {
		let directoryObject = {};
		let dir = fs.readdirSync(rootPath);
		for (let file of dir) {
			let filePath = rootPath + "/" + file;
			let stats = fs.statSync(filePath)
			if (stats.isDirectory()) {
				if (recursive)
					directoryObject[file] = JsonImporter.importJsonDirectory(filePath, recursive);
			}
			else if (stats.isFile()) {
				if (JsonImporter.hasExtension(file, "json"))
					directoryObject[JsonImporter.removeExtension(file)] = JsonImporter.importJsonFile(filePath);
			}
		}
		return directoryObject;
	}

	static importJsonFile(fileName: string): any {
		let data = fs.readFileSync(fileName, 'utf8');
		return JSON.parse(data);
	}

	static removeExtension(filename: string): string {
		let extStart: number = filename.lastIndexOf(".");
		if (extStart == -1)
			return filename;
		else
			return filename.substr(0, extStart);
	}

	static hasExtension(filename: string, matchExtension:string): boolean {
		let extStart: number = filename.lastIndexOf(".");
		if (extStart == -1 || extStart == filename.length)
			return false;
		else {
			let extension = filename.substr(extStart+1);
			return extension === matchExtension;
		}	
	}
}