var row = 3;
var col = 3;
cellSize = 150;
boardSize = 450;

function initialBoard (b_context) {
	b.width = b.width;
	for (var i = 1; i < row; i++) {
		b_context.moveTo(i*cellSize,0);
		b_context.lineTo(i*cellSize,boardSize);
		b_context.moveTo(0,i*cellSize);
		b_context.lineTo(boardSize,i*cellSize);
	}
	b_context.stroke();
}

function drawSign(sign , cell) {
	if(sign == "x"){
		cell.sign = "x";
		drawX(cell.row, cell.col);
	}
	else{
		cell.sign = "o";
		drawO(cell.row, cell.col);
	}
}

function drawX (x , y) {
	b_context.beginPath();
	b_context.moveTo((x-1)*cellSize,(y-1)*cellSize);
	b_context.lineTo(x*cellSize,y*cellSize);
	b_context.moveTo(x*cellSize,(y-1)*cellSize);
	b_context.lineTo((x-1)*cellSize,y*cellSize)
	b_context.stroke();
}
function drawO (x , y) {
	b_context.beginPath();
	b_context.arc(((x-1)*cellSize)+75,((y-1)*cellSize)+75,70,0,2*Math.PI);
	b_context.stroke();
}



