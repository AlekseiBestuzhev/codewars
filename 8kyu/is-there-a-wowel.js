// Task 
// Учитывая массив чисел, проверьте, являются ли какие-либо из чисел кодами символов для строчных гласных ( a, e, i, o, u).
// Если это так, измените значение массива на строку этой гласной.
// Вернуть полученный массив.
// Solution
function isVow(a) {
	return a.map(
		charCode =>
			/[aeiou]/.test(String.fromCharCode(charCode))
				? String.fromCharCode(charCode)
				: charCode)
}