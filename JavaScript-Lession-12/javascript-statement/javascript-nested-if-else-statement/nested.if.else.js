// ? javascript support nested if else statement --------------------------------------------------------------------------------->

// ? let's try and see syntax of nested "if-else-if-else" statement ----------------------------> 

const truth = true;

if (truth) {
    if (truth) {
        console.log('hello');
    };
} else if (truth) {
    if (truth) {
        console.log('hey');
    } else if (truth) {
        console.log('hi');
    };
} else {
    console.log('yo yo');
    if (truth) {
        console.log('world');
    } else if (truth) {
        console.log('hi');
    } else {
        console.log('bye');
    };
};