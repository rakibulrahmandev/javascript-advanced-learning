//? javascript basic array methods ---------------------------------------------------------------------------------------------------->

//! javascript modifying and slicing arrays ------------------------------------------------------------>

//* slice(start, end) -> Returns a portion of an array.

//! #string ------------------------------------------------------->
const arrOfProduct = ['Phone', 'Watch', 'AC', 'TV', 'Desktop'];
console.log(arrOfProduct.slice(0, 3)); // output: [ 'Phone', 'Watch', 'AC' ];

//! #number ------------------------------------------------------->
const arrOfNumber = [12, 52, 45, 86, 78, 40];
console.log(arrOfNumber.slice(2, 5)); // output: [ 45, 86, 78 ];

const arrOfNum = [58, 48, 45, 78, 90, 85, 65, 70, 140];
console.log(arrOfNum.slice(5, 8)); // output: [85, 65, 70];

//* splice(start, deleteCount, item1, item2, ...) → Removes or adds elements in an array.

//! #string ------------------------------------------------------->
const arrOfAlpha = ['a', 'b', 'c', 'd', 'e'];
console.log(arrOfAlpha.splice(2, 1, 'x', 'y')); // output: ['c'];
console.log(arrOfAlpha); // output: [ 'a', 'b', 'x', 'y', 'd', 'e' ];

//! #number ------------------------------------------------------->
const arrOfNumCode = [12, 45, 23, 450, 700];
console.log(arrOfNumCode.splice(1, 3, 50)); // output: [45, 23, 450];
console.log(arrOfNumCode); // output: [12, 50, 700];

//* concat(arr2) -> Merges two arrays.

//! #string ------------------------------------------------------->
const arrOfAlphabet1 = ['a', 'b', 'c'];
const arrOfAlphabet2 = ['d', 'e'];
console.log(arrOfAlphabet1.concat(arrOfAlphabet2)); // output: [ 'a', 'b', 'c', 'd', 'e' ];

//! #number ------------------------------------------------------->
const arrOfNumber2 = [15, 20];
const arrOfNumber3 = [25, 30];
console.log(arrOfNumber2.concat(arrOfNumber3)); // output: [ 15, 20, 25, 30 ];

//! #mixed array -------------------------------------------------->
const arrOfPerson3 = ['Rakibul Rahman', 'Software Engineer'];
const arrOfPerson4 = ['Esma Rahman', 'Software Engineer'];
console.log(arrOfPerson3.concat(arrOfPerson4)); // output: ['Rakibul Rahman', 'Software Engineer', 'Esma Rahman', 'Software Engineer'];

//* join(separator) -> Converts an array to a string.

//! #string ------------------------------------------------------->
const arrOfName = ['Rakibul', 'Rahman'];
console.log(arrOfName.join(' ')); // output: 'Rakibul Rahman';