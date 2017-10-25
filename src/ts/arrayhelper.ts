export class ArrayHelper {
	static includes(array: any[], token: any){
		for(let i of array){
			if(i === token)
				return true;
		}
		return false;
	}
}
