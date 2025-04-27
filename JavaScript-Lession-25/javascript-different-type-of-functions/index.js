//? javascript different type of functions ---------------------------------------------------------------------------------------------------------------->

//! syntax of three type of functions --------------------------------------------------------------------------------->

/**
 * 
 * ------------------------------------------------------------------>
 * function-1 normal function.
 * 
 * function introduceMyself() {
 *  
 *  return (logic);
 * 
 * };
 * 
 * ------------------------------------------------------------------>
 * function-2 expression function.
 * 
 * const introduceHerself = function() {
 * 
 *  return (logic);
 * 
 * };
 * 
 * ------------------------------------------------------------------>
 * function-3 arrow function (ES6).
 * 
 * const introduceMyMom = () => {
 * 
 *  return (logic);
 * 
 * };
*/

//? let's see how to declare and how it work ------------------------------------------------------------------------->

//* Function-1 Normal Function -------------------------------------->
function introduceMyself() {
    
    const myself = 'Rakibul Rahman';
    return myself;

};

// check the result:
console.log(introduceMyself()); // output: 'Rakibul Rahman';

//* Function-2 Expression Function --------------------------------->
const introduceHerself = function() {

    const herself = 'Ensiya Rahman';
    return herself;

};

// check the result:
console.log(introduceHerself()) // output: 'Ensiya Rahman';

//* Function-3 Arrow Function (ES6) -------------------------------->
const introduceMyMom = () => {

    const myMom = 'Roksana Rahman';
    return myMom;

};

// check the result:
console.log(introduceMyMom()) // output: 'Roksana Rahman';