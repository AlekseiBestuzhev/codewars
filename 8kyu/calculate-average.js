// Task 
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
// Solution
function findAverage(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result / array.length || 0;
}

function find_average(arr) {
	return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}