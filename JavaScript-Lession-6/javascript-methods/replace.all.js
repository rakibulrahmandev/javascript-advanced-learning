// ? today we learn JavaScript 'replaceAll()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'replaceAll()' -------------------------------------------->

const fruits = "Apple, Orange";
const replaceAllFruits = fruits.replaceAll("apple", "orange");

const iLikeFruits = "Mango, Dragon";
const replaceAllLikeFruits = iLikeFruits.replaceAll("Mango", "Banana");

const softDrinks = "Milk Shake, Sprite, Mojo, Milk Shake";
const replaceAllMilkShakeToMilk = softDrinks.replaceAll("Milk Shake", "Milk");

console.log(replaceAllFruits); // output: "Apple, Orange"; not replace because case sensitive;
console.log(replaceAllLikeFruits); // output: "Banana";
console.log(replaceAllMilkShakeToMilk); // output: "Milk, Sprite, Mojo, Milk";

// ! note:
// ? replaceAll(searchValue, replaceValue) – Replaces all occurrences of a specified value.
// ? remember that replaceAll() method case sensitive.