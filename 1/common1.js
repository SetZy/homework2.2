var newArr = [1,undefined,3,5,-3];
var min = newArr[0];
var max = min;
var sum = 0;
var sumAr = [];
for(var i = 0; i < newArr.length; i++){
	if( isNaN(newArr[i]) || typeof(newArr[i]) === undefined){
		i+=1;
	}
	if (newArr[i] > max) max = newArr[i];
	if (newArr[i] < min) min = newArr[i];
	sum += newArr[i];
}
sumAr.push(min,max,sum);

console.log(min);
console.log(max);
console.log(sum);
console.log(sumAr);

