// ? javascript have switch-case statement ------------------------------------------->

// ? let's try and see the syntax switch-case statement ------------------------------>

switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;

    case value2:
        // Code to execute if expression === value2
        break;

    case value3:
        // Code to execute if expression === value3
        break;

    default:
        // Code to execute if none of the cases match
};

// ? example ------------------------------------------------------------------------->

let number = 5;
let dayName;

// ? you can use multiple value in every case ---------------------------------------->

switch (number) {
    case 1: {
        dayName = 'Sunday';
        break;
    };
    case 2: {
        dayName = 'Monday';
        break;
    };
    case 3: {
        dayName = 'Tuesday';
        break;
    };
    case 4: {
        dayName = 'Wednesday';
        break;
    };
    case 5: {
        dayName = 'Thursday';
        break;
    };
    case 6: {
        dayName = 'Friday';
        break;
    };
    case 7: {
        dayName = 'Saturday';
        break;
    };
    default: {
        dayName = 'Please input valid number';
    };
};

// ? you can use single value in every case ---------------------------------------->

switch (number) {
    case 1: 
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5: 
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Please input valid number';
};

console.log(`Today is ${dayName}`);

// ! note: 
// ? Explanation:
// ? switch(expression): Evaluates the expression.
// ? case value1:: If the expression matches value1, the corresponding block of code runs.
// ? break;: Stops execution and exits the switch block.
// ? default:: Runs when no cases match (optional but useful).