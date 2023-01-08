// Task 
// Кодирование в функции cutIt, функция принимает 1 параметр: arr. arrпредставляет собой массив строк.
// Первая миссия: Обходя arr, найдите кратчайшую длину строки.
// Вторая миссия: arrснова пройтись, перехватить все строки до кратчайшей длины строки (начать с index0). вы можете использовать один из slice() substring() или substr() сделать это. вернуть результат после завершения работы.
// Solution
function cutIt(arr) {
	//coding here...
	let minl = Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length < minl) {
			minl = arr[i].length;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].slice(0, minl);
	}
	return arr;
}

const cutIt = (arr) => arr.map(element => element.slice(0, Math.min(...arr.map(element => element.length))))