
Array.prototype.replaceM = function(elemMin, elemMax){ 		//method who replace min and max
	var minIndex = 0;
	var maxIndex = 0;
	for(var i = 0; i < this.length; i++){
		if(!this[i]){
			i += 1;
		}
		if(this[i] == elemMin){
			minIndex = i;

		}
		if (this[i] == elemMax){
			maxIndex = i;
		}
	}
	var a = this[minIndex];
		this[minIndex] = this[maxIndex];
		this[maxIndex] = a;
		
}
Array.prototype.sortW = function() {					//method who find min, max, sum and add all to new array
	this.min = 0;
	this.max = 0;
	this.summ = 0;
	this.arr = [];
	
	for(var i = 0; i < this.length; i++) {
		if(!this[i]){
			i += 1;
		}
		if(this[i] < this.min){
			this.min = this[i];
		}
		if(this[i] > this.max){
			this.max = this[i];
		}
		this.summ += this[i];
	}
	this.arr.push(this.min,this.max,this.summ);
	this.arr.replaceM(this.min, this.max);				//for new array used method replace
	return this.arr;
}

var newArr = [1,undefined,3,5,-3];

alert(newArr.sortW());







