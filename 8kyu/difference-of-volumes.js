//Task
// В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел aи b. Каждый список будет состоять из 3 положительных целых чисел выше 0, представляющих размеры прямоугольных параллелепипедов aи b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше. Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), объем aравен 12, а объем bравен 20. Следовательно, функция должна вернуть 8. Ваша функция будет проверена как на готовых примерах, так и на случайных. Если можете, попробуйте написать это одной строкой кода.
//Solution
function findDifference(a, b) {
	let v1 = a[0];
	let v2 = b[0];
	for (let i = 1; i < a.length; i++) {
		v1 *= a[i];
		v2 *= b[i];
	}
	if (v1 > v2) return v1 - v2;
	else return v2 - v1;
}

const result = findDifference([3, 2, 5], [1, 4, 4]);
console.log(result);