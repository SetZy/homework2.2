
var newArr = [1,undefined,3,5,-3];
console.log(newArr);

var sum = 0;
var min = newArr[0];
var max = min;
var minIndex = 0;
var maxIndex = 0;

for(i = 0; i < newArr.length; i++){
	if( isNaN(newArr[i]) || typeof(newArr[i]) === undefined){
		i+=1;
	}
	if (newArr[i] > max){
		max = newArr[i]; 	maxIndex = i;
	} 
	if (newArr[i] < min){
		min = newArr[i];	minIndex = i;
	} 
	sum +=newArr[i]
}

	a = newArr[minIndex];
	newArr[minIndex] = newArr[maxIndex];
	newArr[maxIndex] = a;

console.log(newArr);


function allVer(min, max, sum){
	var obj = {};
	obj.min = min;
	obj.max = max;
	obj.sum = sum;
	obj.wrAll = function() {
		alert("Min = " + min + "; " + "Max = " + max + "; " +  "Sum = " + sum);
	}
	return obj;
}
console.log()
var sAll = new allVer(newArr[maxIndex], newArr[minIndex], sum);
sAll.wrAll();




