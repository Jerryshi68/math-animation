/**
 * Math common part for animation diagram
 */

function drawAxis(board, w, h, margin, oX, oY){
	xx = margin;
	board.moveTo(xx, oY);
	xx = w - margin;
	board.lineTo(xx, oY);
	board.lineTo(xx-10, oY-5);
	board.moveTo(xx, oY);
	board.lineTo(xx-10, oY+5);
	board.font = '22px Times New Roman';
    board.fillStyle = '#00C';
    board.fillText('x', xx - 10, oY + 20);
	
	yy = h - margin;
	board.moveTo(oX, yy);
	yy = margin;
	board.lineTo(oX, yy);
	board.lineTo(oX-5, yy+10);
	board.moveTo(oX, yy);
	board.lineTo(oX+5, yy+10);
    board.fillText('y', oX - 20, yy + 10);
}