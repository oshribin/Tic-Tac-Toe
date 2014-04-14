function Cell (row,col) {
	this.row = row;
	this.col = col;
	this.sign = null;
	this.toString = function () {
		return(this.row + "," + this.col);	
	}
}
