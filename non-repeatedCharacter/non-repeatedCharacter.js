/*
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.

Examples
-------------------------------------------------
Input                                	Output
-------------------------------------------------
string:
"ABCDBIRDUP"	                         "A"

string:
"XXXXXXX"	                           "sorry"

string:
"ALAMABA"	                             "L"

string:
"BABA"	                               "sorry"
-------------------------------------------------
*/

function firstNonRepeatedCharacter (string) {
   // write your code here
   for(var i = 0;  i < string.length; i++){
   	if(string.split(string[i]).length===2){
   		return string[i]
   		
   	}
   }


   return "sorry"
}
