// Task 
// Кодирование в функции trueOrFalse, функция принимает 1 параметр: valпопробуйте использовать условный оператор if...else, если valзначение равно false (val==false или оно может быть преобразовано в false), должно вернуть строку "false", если нет, вернуть строку "истина".
// Solution
function trueOrFalse(val) {
	if (val) return 'true';
	else return 'false';
}

function trueOrFalse(val) {
	return val ? true : false;
}