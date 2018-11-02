var ar = [1,2,3,4,5,6,7];

function doT(arr, callback){
	for(var i = 0; i < arr.length; i++){
		callback(i, arr[i]);
	}
}
function byT(i, num){
	console.log("Index " + i + "; Value " + num);
}

doT(ar, byT);