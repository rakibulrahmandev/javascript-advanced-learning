// ? javascript have some mathematics operator like "+", "-", "/", "*" and extra two operators "%", and "**" ---------------------->

// ? let's try to additional operator => "-" subtract operators ----------------------------->

const num10 = 10;
const num20 = 20;
const subtractNum20ToNum10 = num20 - num10;

const num40 = 40;
const num60 = 60;
const subtractNum60ToNum40 = num60 - num40;

const strNum20 = "20";
const strNum40 = "40";
const subtractNum40ToNum20 = strNum40 - strNum20;

console.log(subtractNum20ToNum10); // output: 10;
console.log(subtractNum60ToNum40); // output: 20;
console.log(subtractNum40ToNum20); // output: 20; because javascript convert string to number possible for subtraction.