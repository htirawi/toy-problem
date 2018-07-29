//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]








function filterPalindromes (words) {
 // Write your code here, and
 // return your final answer.
 
 var arr = [];
 var flag = true;
 for(var i = 0 ; i < words.length; i++){
 	var wordLength = words[i].length-1;
 	for(var j = 0 ; j < words[i].length; j++){
 		if(words[i][j].toLowerCase() === words[i][wordLength].toLowerCase()){
 			flag = true;
 		}
 		else{
 			flag = false;
 		}
 		wordLength--;
 	}
 	if(flag === true){
 		arr.push(words[i])
 	}
 }
 
 return arr;
}