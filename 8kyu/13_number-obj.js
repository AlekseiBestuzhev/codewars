// Task 
// Кодирование в функции whatNumberIsIt. функция принимает 1 параметр: n. это число.
// Чтобы судить о количестве n. Если n является одной из пяти указанных выше констант, верните одну из этих строк:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Solution
function whatNumberIsIt(n) {
	let numb = (n == Number.POSITIVE_INFINITY ? 'Number.POSITIVE_INFINITY' :
		n == Number.MAX_VALUE ? 'Number.MAX_VALUE' :
			Number.isNaN(n) ? 'Number.NaN' :
				n == Number.MIN_VALUE ? 'Number.MIN_VALUE' :
					n == Number.NEGATIVE_INFINITY ? 'Number.NEGATIVE_INFINITY' :
						n);
	let result = `Input number is ${numb}`;
	return result;
}

const whatNumberIsIt = n => `Input number is ${n == Number.POSITIVE_INFINITY ? 'Number.POSITIVE_INFINITY' :
	n == Number.NEGATIVE_INFINITY ? 'Number.NEGATIVE_INFINITY' :
		n == Number.MAX_VALUE ? 'Number.MAX_VALUE' :
			n == Number.MIN_VALUE ? 'Number.MIN_VALUE' :
				Number.isNaN(n) ? 'Number.NaN' :
					n}`