// ? today we learn JavaScript 'replace()' string methods ------------------------------------------>

// ? Let's try to JavaScript string methods 'replace()' -------------------------------------------->

const countries = "Korea, Japan, China, Iceland";
const replaceSomeCountry = countries.replace("Iceland", "Ireland");

const iLike = "Korea, China, Japan, Iceland, Ireland, Saudi Arabia";
const replaceSomeCountries = iLike.replace('Iceland, Ireland', 'Qatar, Greenland');

console.log(replaceSomeCountry); // output: "Korea, Japan, China, Iceland";
console.log(replaceSomeCountries); // output: "Korean, China, Japan, Qatar, Greenland, Saudi Arabia";

// ! note:
// ? replace(searchValue, replaceValue) – Replaces a specified value in a string.
// ? remember that replace() method are case sensitive.