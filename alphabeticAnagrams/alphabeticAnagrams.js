/*
In an alphabetized array of every anagram of a given string, what index would the given string occupy?
Consider an anagram as any sequence of letters. For any word with at least two different letters, 
there are other words composed of the same letters but in a different order (for instance, 
	“RESISTANCE”/”ANCESTRIES”, which happen to both be dictionary words; for our purposes “SISTANERCE” 
	is also a word composed of the same letters as these two).

Given a word, return its index number starting at 1 (not 0) to represent the rank of the anagram 
(for example, the 42nd element is the 42nd alphabetic anagram).

Example for given string ‘cat’:

anagramsOfCat = [‘act’, ‘atc’, ‘cat’, ‘cta’, ‘tac’, ‘tca’];

‘cat’ is the 3rd item in this array, so anagramPosition should return 3; 
remember that the array is 1-indexed (starts at 1 instead of the usual 0).

Here is the catch: Your function should be able to accept any word 20 letters or less in length 
(possibly with some letters repeated), and take no more than 5000 milliseconds to run.

Examples
Input			Output
string:
"BAEBEE"			12
__________________________
string:
"ABBS"				1
__________________________
string:
"BABS"				4
__________________________
string:
"ARCTIC"			42
___________________________
string:
"STARK"				92
____________________________

*/

function anagramPosition (string) {
	var stringLetters = string.split('').sort().join('');
	let result = '';
	var anagRank = 0;
	//IIFE
	(function makeAnagram (anagram, str) {

		if (anagram.length === stringLetters.length) {
			if (result !== anagram) { 
				anagRank++;
				result = anagram
				return result; 
			}
		}
		for (let i = 0; i < stringLetters.length; i++) {
			if (result.indexOf(string) + 1 !== 0) { 
				break;
			} else if (str.indexOf(i.toString()) === -1) {
				makeAnagram(anagram + stringLetters[i], str + i.toString());
			}
		}
	}('', ''));
	return anagRank;
}




// function anagramPosition (string) {
//   var letters = string.split('').sort().join('');
//   let result = '';
//   var indexCounter = 0;
//   (function makeAnagram (anagram, cache) {
//     console.log('indexCounter ', indexCounter)
//     //console.log('result.indexOf(string) + 1', result.indexOf(string) + 1);
//     if (anagram.length === letters.length) {
//       if (result !== anagram) { 
//         indexCounter++;
//         result = anagram
//         return result; 
//       }
//     }
//     for (let i = 0; i < letters.length; i++) {
//       if (result.indexOf(string) + 1 !== 0) { 
//         //console.log('found it');
//         break;
//       } else if (cache.indexOf(i.toString()) === -1) { makeAnagram(anagram + letters[i], cache + i.toString()); }
//     }
//   }('', ''));
//   // console.log(result.length);
//   return indexCounter;
// }

// console.log(anagramPosition('stark'));