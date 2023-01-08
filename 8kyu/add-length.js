// Task 
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.
// Solution
function addLength(str) {
	let arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = `${arr[i]} ${arr[i].length}`;
	}
	return arr;
}

function addLength(str) {
	return str.split(" ").map(s => `${s} ${s.length}`)
}