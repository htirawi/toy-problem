/* Given a string, remove any characters that are not unique from the string.

Examples
------------------------------------
Input                 |	Output
------------------------------------
str:                  |
"abccdefe"            | "abdf"
------------------------------------                      
str:                  | 
"hello there"         | "o tr"
------------------------------------                      
str:                  |
"xyz"	              | "xyz"
------------------------------------                      
str:                  |
"iiii"                |	""
------------------------------------
*/

function onlyUnique (str) {
   // your code is here
   var result = "";
   var obj = {};
   
   for(var i = 0 ; i < str.length;i++){
   	if(obj[str[i]]){
   		obj[str[i]]++
   	}
   	else{
   		obj[str[i]] =1;
   	}
   }
   
   for(var j = 0 ; j < str.length;j++){
   	if(obj[str[j]] === 1){
   		result+=str[j];
   	}
   }
   return result;


}	