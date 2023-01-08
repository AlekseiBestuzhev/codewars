// Task 
// Кодирование в функции howManySmaller, функция принимает 2 параметра: arr и n. arr представляет собой десятичный массив. n является десятичной дробью.
// Первая миссия: пусть все элементы в массиве сохраняют два десятичных знака (не нужно преобразовывать число n).
// Вторая миссия: Обход обр, подсчитай номер элемента меньше n и верни его.
// Solution
let howManySmaller = (arr, n) => arr.filter(element => +element.toFixed(2) < n).length;

function howManySmaller(arr, n) {
	count = 0;

	for (i in arr) {
		if (arr[i].toFixed(2) < n) {
			count++;
		}
	}
	return count;
}
// function howManySmaller(arr, n) {
// 	//coding here..
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(+arr[i].toFixed(2));
// 		console.log(newArr[i]);
// 		console.log(typeof newArr[i]);
// 	}
// 	let numb = 0;
// 	let min = 0;
// 	for (let i = 0; i < newArr.length; i++) {
// 		if (newArr[i] < n && newArr[i] >= newArr[i - 1]) {
// 			numb = i;
// 		}
// 	}
// 	return numb;
// }
// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);