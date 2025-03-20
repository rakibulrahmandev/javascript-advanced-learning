// ? javascript have ternary operator and easy to place conditions ----------------------------------------------->

// ? Let's try and see how looks syntax of ternary operators ------------------------------------>

// ? syntax -> condition ? expression_if_true : expression_if_false;
// ? nested syntax -> condition ? expression1 : expression2 ? expression3 : expression4;

const age = 18;
const msg = age >= 18 ? 'Your are Adult' : 'Your are a minor';

const result = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "F";

console.log(msg);
console.log(result);