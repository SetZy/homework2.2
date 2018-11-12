Array.prototype.getAll = function() {
	this.arr = [];
	this.min = 0;
	this.max = 0;
	this.summ = 0;
	for(var i = 0; i < this.length; i++) {
		if(!this[i]) {
			i += 1;
		}
		if(this[i] < this.min)
			this.min = this[i];
		if(this[i] > this.max)
			this.max = this[i];
		this.summ += this[i]; 
	}
	this.arr.push(this.min,this.max,this.summ);
	return this.arr;
}

var newArr = [1,undefined,3,5,-3];

alert(newArr.getAll());

