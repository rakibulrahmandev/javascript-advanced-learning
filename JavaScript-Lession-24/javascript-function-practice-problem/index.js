//? javascript function practice problem ------------------------------------------------------------------------------------------------------------------------>

//! Basic level ---------------------------------------------------------------------------------------------------------->

//* Pr-1. Find the Maximum Number. --------------------------------------------------------------->

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
};

// check the output:
console.log(findMax(10, 20, 50)); // output: 50;

// or
function findMaxNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    };
};

// check the output:
console.log(findMaxNumber(10, 58, 47)); // output: 58;

//* Pr-2. Check Even or Odd. --------------------------------------------------------------------->
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

// check the output:
console.log(isEvenOrOdd(22)); // output: true;

//* Pr-3. Sum of All Elements in Array. ---------------------------------------------------------->
function sumArr(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };

    return sum;
};

// check the output:
console.log(sumArr([0, 14, 25, 40, 45])); // output: 124;

// or
function sumArray(arr) {

    let i = 0;
    let sum = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    };

    return sum;

};

// check the output:
console.log(sumArray([0, 14, 25, 40, 45])); // output: 124;

//* Pr-4. Reverse a String. ---------------------------------------------------------------------->
function revStr(str) {
    return str.split('').reverse().join('');
};

// check the output:
console.log(revStr('Rakibul Rahman')); // output: "namhaR lubikaR";

// or
function reverseStr(str) {

    let reverse = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    };

    return reverse;
};

// check the output:
console.log(reverseStr('Ensiya Rahman')); // output: "namhaR ayisnE";

// or
function reversedString(str) {

    let i = str.length - 1;
    let reversed = '';

    while (i >= 0) {
        reversed += str[i];
        i--;
    };

    return reversed;

};

// check the output:
console.log(reversedString('Roksana Rahman')); // output: "namhaR anaskoR";

//* Pr-5. Count Vowels. -------------------------------------------------------------------------->
function countVowels(str) {

    let countVowels = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        if ('aeiou'.includes(str[i].toLowerCase())) countVowels++;
    };

    return countVowels;

};

// check the output:
console.log(countVowels('Rakibul Rahman')); // output: 5;

// or
function countVow(str) {

    let countVowels = 0;
    let i = str.length - 1;

    while (i >= 0) {
        if ('aeiou'.includes(str[i].toLowerCase())) countVowels++;
        i--;
    };

    return countVowels;

};

// check the output:
console.log(countVow('Ensiya Rahman')); // output: 4;

//* Pr-6. Convert Celsius to Fahrenheit. --------------------------------------------------------->
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
};

// check the output:
console.log(celsiusToFahrenheit(34)); // output: 93.2;

//! intermediate level ------------------------------------------------------------------------------------------------>

//* Pr-7. Find the Smallest Number. -------------------------------------------------------------->
function findMin(num1, num2, num3) {

    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3;
    };

};

// check the output:
console.log(findMin(20, 50, 14)); // output: 14;

//* Pr-8. Check if a String is a Palindrome. ----------------------------------------------------->
function isPalindrome(str) {

    let reverseStr = str.split('').reverse().join('');

    if (str === reverseStr) {
        return true;
    } else {
        return false;
    };

};

// check the output:
console.log(isPalindrome('Rakibul Rahman')); // output: false;

// or
function isPaliStr(str) {

    let originalStr = str.toLowerCase();
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i].toLowerCase();
    };

    if (originalStr === reverseStr) {
        return true;
    } else {
        return false;
    };

};

// check the output:
console.log(isPaliStr('Ensiya Rahman')); // output: false;

// or
function isPaliString(str) {
    
    let i = str.length - 1;
    let originalStr = str.toLowerCase();
    let reverseStr = '';

    while (i >= 0) {
        reverseStr += str[i].toLowerCase();
        i--;
    };

    if (originalStr === reverseStr) {
        return true;
    } else {
        return false;
    };

};

// check the output:
console.log(isPaliString('Esma Rahman')); // output: false

//* Pr-9. Find the Largest Element in an Array. -------------------------------------------------->
function largestEleOfArr(arr) {

    let oriArr = arr;
    let largestEle = arr[0];

    for (let i = 0; i < oriArr.length; i++) {
        if (arr[i] > largestEle) largestEle = arr[i];
    };

    return largestEle;

};

// check the output:
console.log(largestEleOfArr([10, 50, 45, 80, 70])); // output: 80;

// or
function largestEleOfArray(arr) {

    let i = 0;
    let oriArr = arr;
    let largestEle = arr[0];

    while (i < oriArr.length) {
        if (arr[i] > largestEle) largestEle = arr[i];
        i++;
    };

    return largestEle;

};

// check the output:
console.log(largestEleOfArray([10, 50, 45, 80, 70])); // output: 80;

//* Pr-10. Find the Factorial of a Number. ------------------------------------------------------->
function findFactorialOfNum(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    };

    return result;

};

// check the output:
console.log(findFactorialOfNum(5)); // output: 120;

//* Pr-11. Find the Number of Words in a String. ------------------------------------------------->
function countWordOfStr(str) {

    const words = str.trim().split(/\s+/);
    return words.length;

};

// check the output:
console.log(countWordOfStr('Rakibul Rahman and Ensiya Rahman')); // output: 5;

// or
function countWordOfString(str) {
    
    let count = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !inWord) {
            count++;
            inWord = true;
        } else if (str[i] === ' ') {
            inWord = false;
        };
    };

    return count;

};

// check the output:
console.log(countWordOfString('Rakibul Rahman and Esma Rahman')); // output: 5;