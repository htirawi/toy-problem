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

 	var min = 0;
 	var max = array.length - 1;
 	var  pivot = Math.floor((min + max) / 2);
 	while (min <= max) {
 		if (array[pivot] < target) {
 			min = pivot + 1;
 		} else if (array[pivot] > target) {
 			max = pivot - 1;
 		} else {
 			return pivot;
 		}
 	}
 	return -1;
 };
