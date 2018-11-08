var arr = ['g', 'd', 'r'];


function wer(ar){
	var obj = {};
	var a = '';
	for(var i=0; i<ar.length; i++){
		a = ar[i];
		obj[a] = i;
		a = '';
		
	}
	return obj;
	console.log(obj);
}

console.log(arr);
console.log(wer(arr));
/*for(var k in wer(arr)){
	console.log(k + ":" + wer(arr)[k]);
	}*/
