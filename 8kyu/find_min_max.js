// Task 
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Solution
let list = [-52, 56, 30, 29, -54, 0, -110];
var min = function (list) {
	let mn = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] < mn) {
			mn = list[i];
		}
	}
	console.log(mn);
}

var max = function (list) {
	let mx = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] > mx) {
			mx = list[i]
		}
	}
	console.log(mx);
}