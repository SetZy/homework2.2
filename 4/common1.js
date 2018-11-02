var ar = [1,6,3,5,-3];

function wer(ar){
	var obj = {};
	for(i=0; i<ar.length; i++){
		eval("obj.i"+i+"= ar[i]");
	}
		return obj;
}
for (var k in wer(ar)){
		console.log("obj." + k + "=" + wer(ar)[k])
		}
