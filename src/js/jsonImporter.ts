module JsonImporter {
	export class JsonImporter {
		static import(type: any, filePath){
			fetch(filePath)
			.then(response => response.json())
			.then(() => {
				treeData = JSON.parse(this.responseText);
			    console.log(treeData);
			});
		}
	}
}