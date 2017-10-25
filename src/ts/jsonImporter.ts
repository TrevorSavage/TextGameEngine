
export class JsonImporter {
/*	static import(type: any, filePath): Promise<Object> {
		return new Promise (function (resolve, reject) {
			console.log("importing " + type + " from " + filePath);
			var request = new XMLHttpRequest();
			request.open("GET", filePath, true);
			request.onreadystatechange = () => {
				if (request.readyState === 4) {
					if (request.status === 200) {
						console.log("Loaded " + filePath);
						resolve(JSON.parse(request.responseText));
					}
					else {
						reject(request.status);
					}
				}
			}
			request.ontimeout = () => {
				reject('timeout');
			}

			request.send(null);
		});
	}*/

	static import(type: any, filePath) {
/*		fs.readDir(myDir, function(dir) {
		  // es5
		  for(var i = 0, l = dir.length; i < l; i++) {
		    var filePath = dir[i];
		    console.log(filePath)
		  }
		  // es6
		  for(let filePath of dir) {
		    console.log(filePath);
		  }
		});*/
	}
}