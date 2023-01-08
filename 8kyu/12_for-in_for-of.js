// Task 
// Функция giveMeFive принимает 1 параметр obj, который является объектом.
// Создайте массив (который вы в конечном итоге вернете). Затем пройдите obj, проверяя каждый ключ и значение. Если длина ключа равна 5, то нажмите ключ в свой массив. Отдельно, если длина значения равна 5, то поместите значение в свой массив.
// В конце верните свой массив.
// Solution
function giveMeFive(obj) {
	//coding here
	const arr = [];
	for (let key in obj) {
		if (key.length == 5) arr.push(key);
		if (obj[key].length == 5) arr.push(obj[key]);
	}
	return arr;
}