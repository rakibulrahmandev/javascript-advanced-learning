//? javascript function ------------------------------------------------------------------------------------------------------------------------------------------>

//! Let's see the function syntax -------------------------------------------------------------------------------------------------------->

//**
// function funcName() {
//  logic or code;
// };
// 
// funcName();
//  */

//! Let's see some example of function -------------------------------------------------------------------------------------------------->

//* ex-1: declare a function and call this function ----------------------------------------------------------------->

// write the function key word and give it a function name:
function introduceMyself() {
    console.log('Hi, I am Rakibul Rahman.');
    console.log('I am a web developer.');
    console.log('My passion is coding and hacking.');
    console.log('My dream is software engineering.');
};

// call the function name:
introduceMyself();

//* ex-2: declare a function and passing the parameters and call this function -------------------------------------->

// write the function key word and give it a function name and passing arguments:
function introduceHerself(username) {
    console.log(`Hi, Her name is ${username}.`);
    console.log('She is a Ethical Hacker.');
    console.log('Her passion is cooking and coding.');
    console.log('Her dream is become a good wife and daughter of parents.');
};

// call the function with passing the parameters:
introduceHerself('Esma Rahman');

//* ex-3: declare a function and passing the multiple arguments and call this function with multiple parameters ----->

// write the function key word and give it a function name with parameters:
function introduceMyNewLove(herName, herPassion, herProfession, herDream) {
    console.log(`Her name is ${herName}.`);
    console.log(`Her passion is ${herPassion}.`);
    console.log(`Her profession is ${herProfession}.`);
    console.log(`Her dream is ${herDream}.`);
};

// call the function with passing multiple parameters:
introduceMyNewLove('Ensiya Rahman', 'coding and cooking', 'they are company COO', 'hurt me');

//* ex-4: declare a function and passing default parameters (ES6 style) and call this function with arguments ------>

// write the function key word and give it a function name with parameters:
function introduceMyMom(momName = 'Roksana') {
    console.log(`My mom name ${momName}`);
};

// call the function with passing arguments:
introduceMyMom(); // without passing arguments;
introduceMyMom('Roksana Rahman'); // with passing argument;

// or
// without ES6 style:
function introduceMyFather(fatherName) {
    if (fatherName === undefined) console.log(`My father name is Siddikur.`);

    console.log(`My father name is ${fatherName}.`);
};

// call the function:
introduceMyFather(); // without passing argument;
introduceMyFather('Siddikur Rahman'); // passing with arguments;

//* ex-6: declare a function and passing the boolean and number values in the parameters --------------------------->

// write the function key word and give it a function name and passing parameters:
function studentsDetails(name, age, isStudent){
    console.log(`Name: ${name}.`);
    console.log(`Age: ${age}.`);
    console.log(`Is Student: ${isStudent}`);
};

// call the function:
studentsDetails('Rakibul Rahman', 18, true);