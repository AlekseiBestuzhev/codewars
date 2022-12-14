// Task 
// Завершите функцию howManydays. Он принимает 1 параметр month, означающий месяц года. Разные месяцы имеют разное количество дней, как показано в таблице ниже. Возвращает количество дней, которые находятся в month. Нет необходимости в проверке ввода: месяц всегда будет больше 0 и меньше или равен 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// Solution
function howManydays(month) {
	var days;
	switch (month) {
		case 2:
			days = 28;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			days = 30;
			break;
		default:
			days = 31;
	}
	return days;
}