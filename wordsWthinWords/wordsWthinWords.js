//Words within Words
//Given an array of unique words, find the word that contains the greatest number of other words. 
//A word must be at least two letters long.
//input:
//wordList:
//[ "gray", "grays", "ray", "rays", "strays" ]	
//output:"grays"



function nestedWordCount (wordList) {
	var word = "";
	var count = 0;
	var max = 0 ;

	for(var i = 0 ; i< wordList.length;i++){
		for(var j = 0 ; j< wordList.length;j++ ){
			if(wordList[i].includes(wordList[j])){
				count++;

			}

		}

		if(count>max){
			max = count;
			word = wordList[i];
		}
		count = 0;
	}
	return word;

}