//Task
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//Solution
var summation = function (num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
const result = summation(3);
console.log(result);


function summation2(num) {
	return num * (num + 1) / 2
}
const result2 = summation2(5);
console.log(result2);