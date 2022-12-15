//Task
// Я получил их одновременно с котенком/щенком. Это было humanYearsмного лет назад.
// Теперь верните их соответствующие возрасты как [ humanYears, catYears, dogYears]
// ЗАМЕТКИ:
// HumanYears >= 1
// HumanYears - только целые числа
// Кошачьи годы
// 15кошачьи годы для первого года
// +9кошачьи годы на второй год
// +4кошачьи годы за каждый последующий год
// Собачьи годы
// 15собачьи годы за первый год
// +9собачьи годы на второй год
// +5собачьи годы за каждый последующий год
//Solution
var humanYearsCatYearsDogYears = function (humanYears) {
	if (humanYears == 1) {
		return [1, 15, 15];
	}
	else if (humanYears == 2) {
		return [2, 24, 24];
	}
	else if (humanYears > 2) {
		let cY = 24;
		let dY = 24;
		for (let i = 3; i <= humanYears; i++) {
			cY += 4;
			dY += 5;
		}
		return [humanYears, cY, dY];
	}
	return [0, 0, 0];
}
const a = humanYearsCatYearsDogYears(10);
console.log(a);

const humanYearsCatYearsDogYears2 = $ =>
	$ == 1 ? [1, 15, 15] :
		$ == 2 ? [2, 24, 24] :
			[$, 24 + (4 * ($ - 2)), 24 + (5 * ($ - 2))];
const a2 = humanYearsCatYearsDogYears2(10);
console.log(a2);