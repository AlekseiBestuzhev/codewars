//Task
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//Solution
function grow(x) {
	let a = x[0];
	for (let i = 1; i < x.length; i++) {
		a *= x[i];
	}
	return a;
}
const x = [1, 2, 3, 4];
const show = grow(x);
console.log(show);

function grow(x) {
	return x.reduce((a, b) => a * b, 1);
}