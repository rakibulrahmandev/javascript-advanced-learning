//? javascript basic array methods ---------------------------------------------------------------------------------------->

//! javascript finding and checking elements methods ------------------------------------------->

//* includes(item) -> Checks if an item exists in an array.

//! #string ---------------------------------------------------->
const arrOfFriends = ['Rakibul', 'Rahman', 'Esma'];
const includesNameEsma = arrOfFriends.includes('Esma');
console.log(includesNameEsma); // output: true;

const arrOfFamilyMember = ['Rakibul', 'Siddikur', 'Roksana', 'Rakibul'];
const includesNameRakibul = arrOfFamilyMember.includes('Rakibul');
console.log(includesNameRakibul); // output: true;

const arrOfMingle = ['Rakibul Rahman', 'Esma Rahman'];
const includesNameRahman = arrOfMingle.includes('Rahman');
console.log(includesNameRahman); // output: false;

//! #number ---------------------------------------------------->
const arrOfCountryPhoneNumCode = [880, 92, 86, 81, 82];
const includesKoreanPhoneNumCode = arrOfCountryPhoneNumCode.includes(82);
console.log(includesKoreanPhoneNumCode); // output: true;

const arrOfKoreanStreetCode = ['03135', '06044', '04168', '48095', '49270'];
const includesKoreanStreetCode = arrOfKoreanStreetCode.includes('03135');
console.log(includesKoreanStreetCode); // output: true;

//! #boolean --------------------------------------------------->
const arrOfBoolean = [false, true, false];
const includesTrue = arrOfBoolean.includes(false);
console.log(includesTrue); // output: true;

//! #mixed array ----------------------------------------------->
const arrOfPerson1 = ['Rakibul Rahman', 'Software Engineer', 'Programmer', 18];
const includesNameFromPerson1 = arrOfPerson1.includes('Rakibul Rahman');
console.log(includesNameFromPerson1); // output: true;

const arrOfPerson2 = ['Esma Rahman', 'Software Engineer', 'Programmer', 15];
const includesProfessionFromPerson2 = arrOfPerson2.includes('Software Engineer');
console.log(includesProfessionFromPerson2); // output: true;

//* indexOf(item) -> Returns the index of an item (or -1 if not found).

//! #string ---------------------------------------------------->
const arrOfCarBrand = ['Toyota', 'Range Rover', 'Honda'];
console.log(arrOfCarBrand.indexOf('Toyota')); // output: 0;

const arrOfAcBrand = ['Gree', 'Media', 'LG', 'Samsung', 'Gree'];
console.log(arrOfAcBrand.indexOf('Gree')); // output: 0;

//! #number ---------------------------------------------------->
const arrOfNumber = [20, 50, 40, 50, 40, 30];
console.log(arrOfNumber.indexOf(50)); // output: 1;

const arrOfNum = [10, 250, 450, 850, 40];
console.log(arrOfNum.indexOf(2)); // output: -1;

//! #boolean --------------------------------------------------->
const arrOfTrue = [false, false, true];
console.log(arrOfTrue.indexOf(true)); // output: 2;

const arrOfFalse = [true, true, false];
console.log(arrOfFalse.indexOf(false)); // output: 2;

//! #mixed array ----------------------------------------------->
const arrOfPerson3 = ['Rakibul Rahman', 'Software Engineer', 'Programmer', 18];
console.log(arrOfPerson3.indexOf(18)); // output: 3;

const arrOfPerson4 = ['Esma Rahman', 'Software Engineer', 'Programmer', 15];
console.log(arrOfPerson4.indexOf('Esma Rahman')); // output: 0;

//* lastIndexOf(item) -> Returns the last index of an item.

//! #string ---------------------------------------------------->
const arrOfProgrammingLanguages = ['Python', 'PHP', 'JavaScript', 'Java', 'C++'];
console.log(arrOfProgrammingLanguages.lastIndexOf('JavaScript')); // output: 2;

//! #number ---------------------------------------------------->
const arrOfSomeRandomCode = [120, 4580, 4561, 2580, 4569];
console.log(arrOfSomeRandomCode.lastIndexOf(4580)); // output: 1;

//! #boolean --------------------------------------------------->
const arrOfTruth = [true, false, false, false];
console.log(arrOfTruth.lastIndexOf(true)); // output 1;

//! #mixed array ----------------------------------------------->
const arrOfPerson5 = ['Rakibul Rahman', 'Software Engineer', 'Programmer', 18];
console.log(arrOfPerson5.lastIndexOf('Programmer')); // output: 2;

const arrOfPerson6 = ['Esma Rahman', 'Software Engineer', 'Programmer', 15];
console.log(arrOfPerson6.lastIndexOf('Software Engineer')); // output: 1;