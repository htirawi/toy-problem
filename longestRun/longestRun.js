/* Write a function that, given a string, 
finds the longest run of identical characters and 
returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs. */
//Examples:

/* Input	     Output
  
  "abbbcc"	     [ 1, 3 ]

  "aabbc"	    [ 0, 1 ]

    ""	        [ 0, 0 ]

"mississippi"   [ 2, 3 ]

"abcdefgh"	    [ 0, 0 ]

"abccccccc"	    [ 2, 8 ]  */


function longestRun (string) {
	if (string.length === 0)
	{
		return [0,0];
	}
	var index = 0, high = 0, count = 0, start = 0;
	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		if (char !== string[i-1]) {
			count = 1;
			start = i;
		} else {
			count++;
		}
		if (count > high) {
			high = count;
			index = start;
		}
	}
	return [index, index + high - 1];
}
