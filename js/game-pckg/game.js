var cells = [10];
var b = document.getElementById('board');
var b_context = b.getContext('2d');
newGame();

function Game () {
	var count = 1;
	for (var i = 1; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			cells[count] = new Cell(j,i);
			count++;
		}
	}
}

function move (e) {
	var x = Math.floor((e.clientX - b.offsetLeft)/cellSize)+1;
	var y = Math.floor((e.clientY - b.offsetTop)/cellSize)+1;
	for (var i = 0; i < cells.length; i++) {
		if((cells[i].row == x) && (cells[i].col == y)){
			if(cells[i].sign == null){
				drawSign("x" , cells[i]);
				var bool = statusCheck();
				if (bool){
					newGame();
					return;
				}
				comMove();
				var bool = statusCheck();
				if (bool){
					newGame();
					return;
				}
				
			}
			else
				window.alert("choose another cell");
		} 
	}
}

function comMove () {
	var x2 = Math.floor((Math.random()*3)+1);
	var y2 = Math.floor((Math.random()*3)+1);
	for (var i = 0; i < cells.length; i++) {
		if((cells[i].row == x2) && (cells[i].col == y2)){
			if(cells[i].sign == null)
				drawSign("o" , cells[i]);
			else
				comMove();
		}	
	}
}
function statusCheck () {
	//check rows
	for (var i = 1; i < 8; i+=3) {
		if ((cells[i].sign != null) && (cells[i].sign == cells[i+1].sign) && (cells[i+1].sign == cells[i+2].sign)){
			if(cells[i].sign == "x"){
				alert("you win");
				return(true);
			}
			else{
				alert("you lose");
				return(true);
			}
		}
	}
	//check col
	for (var i = 1; i < 4; i++) {
		if ((cells[i].sign != null) && (cells[i].sign == cells[i+3].sign) && (cells[i+3].sign == cells[i+6].sign)){
			if(cells[i].sign == "x"){
				alert("you win");
				return(true);
			}
			else{
				alert("you lose");
				return(true);
			}
		}
	}

	//ceck diagonal to left
	if ((cells[1].sign != null) && (cells[1].sign == cells[5].sign) && (cells[5].sign == cells[9].sign)){
		if(cells[1].sign == "x"){
			alert("you win");
			return(true);
		}
		else{
			alert("you lose");
			return(true);
		}
	}
	//check diagonal to right
	if ((cells[3].sign != null) && (cells[3].sign == cells[5].sign) && (cells[5].sign == cells[7].sign)){
		if(cells[3].sign == "x"){
			alert("you win");
			return(true);
		}
		else{
			alert("you lose");
			return(true);
		}
	}
	return (false);

}

function newGame () {
	initialBoard(b_context);
	Game();
}
	




