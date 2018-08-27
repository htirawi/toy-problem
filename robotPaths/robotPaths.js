/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
The robot can move either up, down, left, or right, 
but cannot visit the same spot twice. 
How many possible unique paths are there to the bottom right corner?
Make your solution work for a grid of any size.
Parameters:
n (required) - amount of rows/columns (max 6)

Examples
Input			Output
n:
1					1
n:
2					2
n:
3					12
*/
function robotPaths (n) {
  // Write your code here, and
  // return your final answer.
  
  var board = makeBoard(n);
  var sol = 0;
  var recurse = function(r,c) {
  	board.togglePiece(r,c);

  	if(r === n-1 && c === n-1){
  		sol++;
  		board.togglePiece(r,c);
  		return;
  	}
  	if(r-1 >= 0 && !board.hasBeenVisited(r-1,c)){
  		recurse(r-1,c);
  	}
  	if(c+1 < n && !board.hasBeenVisited(r,c+1)){
  		recurse(r,c+1);
  	}
  	if(r+1 < n && !board.hasBeenVisited(r+1,c)){
  		recurse(r+1,c);
  	}
  	if(c-1 >=0 && !board.hasBeenVisited(r,c-1)){
  		recurse(r,c-1);
  	}
  	board.togglePiece(r,c);
  };
  recurse(0,0);
  return sol;
}

function makeBoard(n) {
	var board = [];
	for (var i = 0; i < n; i++) {
		board.push([]);
		for (var j = 0; j < n; j++) {
			board[i].push(false);
		}
	}
	board.togglePiece = function(i, j) {
		this[i][j] = !this[i][j];
	}
	board.hasBeenVisited = function(i, j) {
		return !!this[i][j];
	}
	return board;
}