const username = "Rakibul Rahman";
const age = 60;

if (age >= 18 && age <= 25) {
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log(`Profession: Student`);
};

if (age >= 25 && age <= 30) {
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log(`Profession: Junior Software Engineer`);
};

if (age >= 35 && age <= 40) {
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log(`Profession: Senior Software Engineer`);
};

if (age >= 40 && age <= 50) {
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log(`Profession: Senior Software Engineer Trainer`);
};



const user_name = "Rakibul Rahman";
const profession = "Student".toLowerCase();
const passion = "Software Engineer".toLowerCase();

if (profession === 'student' || passion === 'programming') {
    console.log(`Username: ${user_name}`);
    console.log(`Profession: ${profession}`);
    console.log(`Passion: ${passion}`);
};

if (profession === 'software engineer' || passion === 'programming') {
    console.log(`Username: ${user_name}`);
    console.log(`Profession: ${profession}`);
    console.log(`Passion: ${passion}`);
};

// ! note:
// ? remember that "if" statement just render his code when condition is true;