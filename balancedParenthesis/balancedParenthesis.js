/* Given a string, return true if it contains balanced parenthesis ().

Examples
----------------------------------
Input	                 | Output |
----------------------------------
string:
"(x + y) - (4)"	         | true   |
----------------------------------
string:
"(((10 ) ()) ((?)(:)))"	 | true   |
----------------------------------
string:
"(50)("	                 | false  |
----------------------------------
string:    
""	                     | true   |
----------------------------------
*/

function isBalanced (string) {
	// write your code here

	var startPar = 0;
	var endPar = 0;
	for(var i = 0 ; i < string.length;i++){

		if(string[i].includes("(")){
			startPar++;
		}
		if(string[i].includes(")")){
			endPar++;
		}
		if(startPar < endPar){
			return false;
		}
	}
	if(startPar === endPar){
		return true;
	}
	else{
		return false;
	}
}


