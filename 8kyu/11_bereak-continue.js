// Task 
// Кодирование в функции grabDoll. функция принимает 1 параметр: dolls. это массив строк, список некоторых кукол.
// Вам нужно пройти dolls, используя forцикл. Если элемент «Hello Kitty» или «Кукла Барби», вы должны поместить его в a bag(сумка — это массив, который я определил в функции); если это другие строки, мы должны использовать continue пропуск.
// Когда bag имеет три элемента, bag он полон. Вы должны использовать break выпрыгнуть из петли; Если bag он не заполнен, вы должны пройти dolls до последнего элемента.
// Вернуть bagпосле завершения цикла for.
// Solution
function grabDoll(dolls) {
	var bag = [];
	for (let i = 0; i < dolls.length; i++) {
		if (bag.length === 3) {
			break;
		}
		switch (dolls[i]) {
			case 'Hello Kitty':
			case 'Barbie doll':
				bag.push(dolls[i]);
			default:
				continue;
		}
	}
	return bag;
}