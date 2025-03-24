//? javascript array basic methods ---------------------------------------------------------------------------------->

//! javascript adding and removing elements methods ------------------------------------------->

//* push(items) -> Adds an item to the end of an array.

//! #string ------------------------------------------------->
const arrOfFruits = ['apple', 'orange', 'mango', 'papaya'];
arrOfFruits.push('carrot');
console.log(arrOfFruits); // output: [ 'apple', 'orange', 'mango', 'papaya', 'carrot' ];

const arrOfFriends = ['Alex', 'Esma', 'Rahman'];
arrOfFriends.push('Rakibul Rahman');
console.log(arrOfFriends); // output: [ 'Alex', 'Esma', 'Rahman', 'Rakibul Rahman' ];

//! #number ------------------------------------------------->
const arrOfNumber = [120, 130, 140, 150];
arrOfNumber.push(160);
console.log(arrOfNumber); // output: [ 120, 130, 140, 150, 160 ];

//! #boolean ------------------------------------------------>
const arrOfBoolean = [true, false, true];
arrOfBoolean.push(false);
console.log(arrOfBoolean); // output: [ true, false, true, true, false ];

//! #mixed array -------------------------------------------->
const arrOfPerson1 = ['Rakibul Rahman'];
arrOfPerson1.push('Software Engineer', 'Programmer', 18);
console.log(arrOfPerson1); // output: [ 'Rakibul Rahman', 'Software Engineer', 'Programmer', 18 ];

const arrOfPerson2 = ['Esma Rahman', 'Software Engineer'];
arrOfPerson2.push('Programmer', 15);
console.log(arrOfPerson2); // output: [ 'Esma Rahman', 'Software Engineer', 'Programmer', 15 ];

//* pop() -> Removes the last item from an array.

//! #string ------------------------------------------------->
const arrOfPhoneBrand = ['Iphone', 'Samsung', 'Real Me', 'Vivo', 'Huawei'];
arrOfPhoneBrand.pop();
console.log(arrOfPhoneBrand); // output: [ 'Iphone', 'Samsung', 'Real Me', 'Vivo' ];

const arrOfPcBrand = ['Dell', 'HP'];
arrOfPcBrand.pop();
console.log(arrOfPcBrand); // output: ['Dell'];

//! #number ------------------------------------------------->
const arrOfPhoneNumSerial = [91, 92, 232, 54, 103, 200];
arrOfPhoneNumSerial.pop();
console.log(arrOfPhoneNumSerial); // output: [ 91, 92, 232, 54, 103 ];

//! #boolean ------------------------------------------------>
const arrOfTruth = [true, true, true, true];
arrOfTruth.pop();
console.log(arrOfTruth); // output: [ true, true, true ];

//! #mixed array -------------------------------------------->
const arrOfPerson3 = ['Rakibul Rahman', 'Programmer', 'Software Engineer', 18];
arrOfPerson3.pop();
console.log(arrOfPerson3); // output: ['Rakibul Rahman', 'Programmer', 'Software Engineer'];

const arrOfPerson4 = ['Esma Rahman', 'Programmer', 'Software Engineer', 15];
arrOfPerson4.pop();
console.log(arrOfPerson4); // output: ['Esma Rahman', 'Programmer', 'Software Engineer'];

//* unshift(item) -> Adds an item to the beginning of an array.

//! #string -------------------------------------------------->
const arrOfRamBrand = ['Kingston', 'Team', 'Toshiba', 'XPG'];
arrOfRamBrand.unshift('Dell');
console.log(arrOfRamBrand); // output: [ 'Dell', 'Kingston', 'Team', 'Toshiba', 'XPG' ];

//! #number -------------------------------------------------->
const arrOfMonitorModelNum = [1254, 2542, 4425, 1011, 7250];
arrOfMonitorModelNum.unshift(5004);
console.log(arrOfMonitorModelNum); // output: [ 5004, 1254, 2542, 4425, 1011, 7250 ];

//! #boolean ------------------------------------------------->
const arrOfFalse = [false, false, false, false];
arrOfFalse.unshift(false);
console.log(arrOfFalse); // output: [ false, false, false, false, false ];

//! #mixed array --------------------------------------------->
const arrOfPerson5 = ['Rakibul Rahman', 'Software Engineer', 'Programmer', 18];
arrOfPerson5.unshift('Bangladesh');
console.log(arrOfPerson5); // output: ['Bangladesh', 'Rakibul Rahman', 'Software Engineer', 'Programmer', 18];

const arrOfPerson6 = ['Esma Rahman', 'Software Engineer', 'Programmer', 15];
arrOfPerson6.unshift('Korea');
console.log(arrOfPerson6); // output: ['Korea', 'Esma Rahman', 'Software Engineer', 'Programmer', 15];

//* shift() -> Removes the first item from an array.

//! #string -------------------------------------------------->
const arrOfTabBrand = ['Ipad', 'Samsung', 'Vivo', 'Huawei'];
arrOfTabBrand.shift();
console.log(arrOfTabBrand); // output: [ 'Samsung', 'Vivo', 'Huawei' ];

//! #number -------------------------------------------------->
const arrOfCountryCode = [1002, 1212, 5254, 6588, 4500, 2340];
arrOfCountryCode.shift();
console.log(arrOfCountryCode); // output: [ 1212, 5254, 6588, 4500, 2340 ];

//! #boolean ------------------------------------------------->
const arrOfTrueFalse = [true, false, true, false, true];
arrOfTrueFalse.shift();
console.log(arrOfTrueFalse); // output: [ false, true, false, true ];

//! #mixed array --------------------------------------------->
const arrOfPerson7 = ['Bangladesh', 'Rakibul Rahman', 'Programmer', 'Software Engineer', 'Hacker', 18];
arrOfPerson7.shift();
console.log(arrOfPerson7); // output: [ 'Rakibul Rahman', 'Programmer', 'Software Engineer', 'Hacker', 18 ];

const arrOfPerson8 = ['Korea', 'Esma Rahman', 'Programmer', 'Software Engineer', 'Hacker', 15];
arrOfPerson8.shift();
console.log(arrOfPerson8); // output: [ 'Esma Rahman', 'Programmer', 'Software Engineer', 'Hacker', 15 ];