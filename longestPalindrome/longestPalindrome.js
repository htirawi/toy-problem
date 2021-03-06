/*Implement a function that finds the longest palindrome in a given string. 
For example, in the string “My dad is a racecar athlete”, 
the longest palindrome is “a racecar a”. 
Count whitespaces as valid characters.
Other palindromes in the above string 
include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
Examples
Input	                            Output
string:
"aibohphobia"	                  "aibohphobia"
string:
"My dad is a racecar athlete"	  "a racecar a" */
function longestPalindrome (string) {
  // Write your code here, and
  // return your final answer.
  var longest = '';
  for(var i =0; i<string.length; i++){
  	for(var j = 0; j<=string.length; j++){
  		if(string.slice(i,j) === string.slice(i,j).split("").reverse().join('')){
  			if(string.slice(i,j).length > longest.length){
  				longest = string.slice(i,j);
  			}
  		}
  	}
  }
  return longest;
}

