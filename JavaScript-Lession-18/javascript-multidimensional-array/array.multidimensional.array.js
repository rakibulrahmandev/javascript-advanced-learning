//? javascript multidimensional array -------------------------------------------------------------------------------------------------------->

//! #2D multidimensional array (matrix) ----------------------------------------------------------------->

const arrOfStrMatrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];

const arrOfNumMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const arrOfBooleanMatrix = [
    [true, false],
    [false, true],
    [false, true]
];

//! #3D multidimensional array --------------------------------------------------------------------------->

const arrOfString = [
    [
        ['a', 'b'], ['c', 'd']
    ],
    [
        ['e', 'f'], ['g', 'h']
    ]
];

const arrOfNumber = [
    [
        [1, 2, 3], [4, 5, 6]
    ],
    [
        [7, 8, 9], [10, 11, 12]
    ]
];

const arrOfBoolean = [
    [
        [true, false], [false, true]
    ],
    [
        [false, true], [true, false]
    ]
];

//! access the 2D multidimensional array ------------------------------------------------------------------->

console.log(arrOfStrMatrix[0][2]); // output: 'c';
console.log(arrOfNumMatrix[1][1]); // output: 5;
console.log(arrOfBooleanMatrix[2][1]); // output: true;

//! access the 3D multidimensional array ------------------------------------------------------------------->

console.log(arrOfString[0][1][1]); // output: 'd';
console.log(arrOfNumber[1][0][1]); // output: 8;
console.log(arrOfBoolean[0][1][0]); // output: false;