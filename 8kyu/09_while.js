// Task 
// Вам нужно написать оператор цикла внутри функции, которая зацикливает nвремя. Каждый раз в цикле он будет добавлять единицу *к str, чередуя, с какой стороны он дополняется: в первый раз а добавляется *к левой стороне str, во второй раз *к правой стороне и так далее.
// Наконец, верните дополненную строку.
// Solution
function padIt(str, n) {
	while (n > 0) {
		if (n % 2) {
			str = '*' + str;
		}
		else {
			str = str + '*';
		}
		n--;
	}
	return str;
}
console.log(padIt('a', 5));
