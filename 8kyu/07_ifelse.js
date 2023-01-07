// Task 
// Полная функция saleHotdogs/ SaleHotDogs/ sale_hotdogs, функция принимает 1 параметр: n, n — количество хот-догов, которые купит клиент, разные числа имеют разные цены (см. следующую таблицу), возвращает, сколько денег покупатель потратит, чтобы купить это количество хот-догов.

// количество хот-догов	цена за единицу (центы)
// п < 5						100
// n >= 5 и n < 10		95
// п >= 10					90
// Solution
function saleHotdogs(n) {
	let price;
	if (n >= 10) price = 90;
	else if (n < 10 && n >= 5) price = 95;
	else price = 100;
	return price * n;
}
console.log(saleHotdogs(11));
function saleHotdogs(n) {
	return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}