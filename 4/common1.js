var arr = ['g', 'd', 'r'];

Array.prototype.wer = function()
{
	var obj = {};
	for(var i=0; i<this.length; i++)
	{
		obj[this[i]] = i;
	}
	return obj;
}

