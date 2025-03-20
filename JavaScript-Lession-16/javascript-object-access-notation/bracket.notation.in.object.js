// ? In Javascript have some two way to access the object properties using dot notation and bracket notation ----------------------------------------------------------->
// ? In JavaScript, dot notation and bracket notation are both ways to access properties or methods of an object. ------------------------------------------------------>

// ? let's practice with bracket notation ------------------------------>

const user = {
    name: 'Rahman',
    age: 18,
    'favorite color': 'black'
};

console.log(`Username: ${user['name']}`);
console.log(`User Favorite color: ${user['favorite color']}`);

// ! Bracket Notation ->
// ? Bracket notation is used when the property name is dynamic or not a valid identifier (e.g., it contains spaces or special characters). You use square brackets ([]) and pass the property name as a string.