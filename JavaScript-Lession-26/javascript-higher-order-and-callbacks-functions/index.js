//? javascript higher order and callback function --------------------------------------------------------------->

//* 1. example of higher order and callback function ----------------------------------------->

// this is higher order function --------------------->
function higherOrder(param) {
    console.log(param);
    console.dir(param);
    param();
};

// this is callback function ------------------------->
function passingFunc() {
    console.log('Hello I am callback function. 😊');
};

// function call and passing another function -------->
higherOrder(passingFunc);

//* 2. example of higher order and callback function ----------------------------------------->

// this is higher order function --------------------->
function highOrder(func) {
    func();
};

// this is callback function ------------------------->
highOrder(function () {
    console.log('Hello I am callback function');
});