var arr = ['g', 'd', 'r'];


function wer(arr){
	var obj = {};
	var a = '';
	for(var i=0; i<arr.length; i++){
		a = arr[i];
		obj[a] = i;
		a = '';
		
	}
	return obj;
}

console.log(arr);
for(var k in wer(arr)){
	console.log(k + ":" + wer(arr)[k]);
}
