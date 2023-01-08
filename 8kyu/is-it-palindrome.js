// Task 
// Your task is to write a function that takes a String and returns true if this string palindrome.
// Solution
function isPalindrome(x) {
	x = x.toLowerCase();
	let y = x.split('').reverse().join('');
	return x === y ? true : false;
}