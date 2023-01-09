// Task 
// Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// Это должно выглядеть так:
// Sam Harris=>S.H
// patrick feeney=>P.F
// Solution
function abbrevName(name) {
	const arr = name.split(' ');
	return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}
console.log(abbrevName("sam harris"));
