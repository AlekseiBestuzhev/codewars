// Task 
// Дайте вам функцию animal, примите 1 параметр: objвот так:
// {name:"dog",legs:4,color:"white"}
// и вернуть такую ​​строку:
// "This white dog has 4 legs."
// Solution
function animal(obj) {
	return `This ${obj['color']} ${obj['name']} has ${obj['legs']} legs.`;
}
let beast = {
	name: "dog",
	legs: 4,
	color: "white"
}
console.log(animal(beast));
