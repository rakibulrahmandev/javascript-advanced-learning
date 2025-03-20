//? JavaScript has 7 primitive data types like number, string, boolean, undefined, null, bigint, and symbol.

//? Let's practice "string" primitive data types ------------------------------------------>
console.log('hello world!'); //? assign the string in the single quotes;
console.log("My Name Is Rakibul Rahman!"); //? assign the string in the double quotes;
console.log(`My Dream Is Software Engineering!`); //? assign the string in the back-tik;

//? Let's practice "number" primitive data types ------------------------------------------>
console.log(100); //? assign the number without any quotes;
console.log(100.524) //? assign the number without any quotes;

//? Let's practice "boolean" primitive data types ----------------------------------------->
console.log(true); //? assign the JavaScript reserved keyword "true";
console.log(false); //? assign the JavaScript reserver keyword "false";

//? Let's practice "undefined" primitive data types --------------------------------------->
console.log(undefined); //? assign the JavaScript reserved keyword "undefined";

//? Let's practice "null" primitive data types -------------------------------------------->
console.log(null); //? assign the JavaScript reserved keyword "null";

//? Let's practice and try to "bigInt" primitive data types ------------------------------->
console.log(900719925474099125411); //? when we try to store big integer in JavaScript it's loss his precision;
console.log(90047557545454545454n); //? when we use "n" in the end of the big integer it's store this value;
console.log(BigInt(900719925474099554)); //? when we don't use "n" in the end of the big integer we can use this "BigInt()" JavaScript built-in constructor. so it can store the big integer.

console.log(BigInt(100)); //? when we use "BigInt()" with normal number it change the number to big integer like "100n". 
console.log(Number(100n)); //? when we use "Number()" with big integer like "100n" it change the big integer to as a normal number.

//! remember that "BigInt" has some limitation:
//! 1. cannot be used with "Math" functions like "Math.sqrt()";
//! 2. cannot mix "BigInt" with regular numbers in arithmetic operations.

// Note: BigInt is a special data type introduced in ES11 (ECMAScript 2020) that allows you to store and work with very large integers beyond the safe range of the Number type.

//? Let's practice and try to "symbol" primitive data types ------------------------------>
console.log(Symbol("id") === Symbol("id")); //? output is false because the symbol() is always stay with unique;
console.log(Symbol.for("shared") === Symbol.for("shared")); //? output is true because the symbol.for() is the globally shared;