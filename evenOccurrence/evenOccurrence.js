//Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.
//Examples


//input:[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
//output:2
//input:[ "cat", "dog", "dig", "cat" ]
//output:"cat"



function evenOccurrence (arr) {
	var obj = {};

	arr.forEach(function(value, index) {
		obj[value] = obj[value] + 1 || 1;
	});

	for (var i = 0; i < arr.length; i++) {
		var eleemnt = arr[i];

		if (obj[eleemnt] % 2 === 0) {
			return eleemnt;
		}
	}
	return null;
}


