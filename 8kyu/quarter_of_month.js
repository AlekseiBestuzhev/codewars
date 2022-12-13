//Task
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
//Solution
const quarterOf = (month) => {
	if (month > 0 && month <= 3) {
		return 1;
	}
	else if (month > 3 && month <= 6) {
		return 2;
	}
	else if (month > 6 && month <= 9) {
		return 3;
	}
	else if (month > 9 && month <= 12) {
		return 4;
	}
	else {
		return 'Enter correct number';
	}
}
const a = quarterOf(10);
console.log(a);

const quarterOf2 = (month) => {
	return Math.ceil(month / 3);
}
const b = quarterOf2(10);
console.log(b);