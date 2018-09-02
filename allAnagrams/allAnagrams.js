/*
Given a single input string, write a function that produces all possible
anagrams of a string and outputs them as an array.
At first, don’t worry about repeated strings. 
What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples

Input				Output
string:
"abc"				[ "abc", "acb", "bac", "bca", "cab", "cba" ]

*/

function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.

  
  var anagrams = {};
  var generator = function(text,options){
  	if(text.length === string.length){
  		anagrams[text]  =true;
  	}
  	for(var i = 0; i< options.length;i++){
  		generator(text + options[i] , options.slice(0,i) + options.slice(i+1))
  	}
  }
  generator("" , string)

  return Object.keys(anagrams);
}
