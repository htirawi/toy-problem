/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable.
 But there are a lot of combinations!
Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on 
the phone with that number (you should return all permutations,not only English words).

Examples
Input					Output
digitString:
"0002"					[ "000A", "000B", "000C" ]
						
digitString:
"1123"					[ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

var digitCharsArray= {
	1: "1",
	2: ['A', 'B', 'C'],
	3: ['D', 'E', 'F'],
	4: ['G', 'H', 'I'],
	5: ['J', 'K', 'L'],
	6: ['M', 'N', 'O'],
	7: ['P', 'Q', 'R', 'S'],
	8: ['T', 'U', 'V'],
	9: ['W', 'X', 'Y', 'Z'],
	0: "0"
	
};

var digitChars = {
	
	0: '0',
	1: '1',
	2: 'ABC',
	3: 'DEF',
	4: 'GHI',
	5: 'JKL',
	6: 'MNO',
	7: 'PQRS',
	8: 'TUV',
	9: 'WXYZ'
	
};

function telephoneWords (digitString) {
	//your code is here
	// Return every combination that can be spelled on a phone with these digits
	var results = [];
	var digitArray = digitString.toString().split('');

	var recurse = function(word, digits){
		if(digits.length === 0){
			results.push(word);
			return;
		}

		var currentDigit = digits[0];
		var remainingDigits = digits.slice(1);
		var letters = digitCharsArray[currentDigit];

		for(var i = 0; i < letters.length; i++){
			recurse(word + letters[i], remainingDigits);
		}
	}

	recurse("", digitArray);
	return results;
}
