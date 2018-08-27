/* Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets,
including the empty set.
Make sure your code does the following:
All characters in a subset should be sorted alphabetically, 
and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once,
e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as 
if it only contained one ‘a’. See the result below.
Examples
Input	       Output
string:
"a"	           [ "", "a" ]
string:
"ab"	   [ "", "a", "ab", "b" ]

string:
"horse"	  [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]

string:
"obama"  	[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]*/

var powerSet = function(str) {

	var ans = [""];
	if (!string.length) return ans;
	var arr = string.split("").sort();
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]] = true; 
	}
	var base = Object.keys(obj);
	ans = ans.concat(base);

	base.forEach(function(item, index) {
		if (base[index + 1]) { add(item, index + 1); }
	});
	
	function add(string, startIndex) {
		var series = [];
		for (var j = startIndex; j < base.length; j++) {
			series.push(string + base[j]);
			if (base[j+1]) { add(string + base[j], j+1) }
		}
	ans = ans.concat(series);
}
ans.sort();
return ans;

}	
