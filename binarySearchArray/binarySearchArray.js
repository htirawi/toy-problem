/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

 var binarySearch = function (array, target) {
 	debugger;
 	var left = 0;
 	var right = array.length-1;
 	var mid = Math.floor((left+right)/2);
 	while(array[mid] != target && left < right){
 		if(target < array[mid]){
 			right = mid - 1;
 		}
 		if(target > array[mid]){
 			left = mid + 1;
 		}
 		mid = Math.floor((left+right)/2)
 	}
 	if(array[mid] !== target){
 		return -1
 	}else {
 		return mid;
 	}
 };
