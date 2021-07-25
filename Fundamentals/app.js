// Activating Strict Mode 
'use strict';



// let hasDriversLincense = false;
// const passTest = true;

// if(passTest) hasDriversLincense = true;console.log('I can Drive');
// if(hasDriversLincense) console.log('I can drive');



// Funcions
// function logger() {
//     console.log('Am a software dev');
// }
// logger();

// function fruits(apple, orange) {
//     console.log(apple, orange);
//     let juice = `Mixed ${apple} apples and ${orange} oranges together to make the juice`;
//     return juice;
// }
// let fruit = (fruits(5, 9));
// console.log(fruit);

// let fruita = (fruits(2, 5));
// console.log(fruita);

// console.log(fruits(4, 7));



// Declaration vs expressions and Arrow Function
// const age = birthAge(1997);

// function birthAge(birthYear) {
//     return 2021 - birthYear;
// }

// const birthAge1 = function (birthYear1) {
//     return 2021 - birthYear1;
// }
// const age1 = birthAge1(1997);
// console.log(age, age1);

// const age = birthYear => 2021 - birthYear;
// const ages = age(1991);
// console.log(ages);

// const age1 = (birthYear1, firstName) => {
//     const age1 = 2021 - birthYear1;
//     const retirement = 65 - age1;
//     // return retirement; 
//     return `${firstName} has ${retirement} years left before retirement`;
// }
// const ages1 = age1(1997, 'Fred');
// const ages2 = age1(1994, 'Grace');
// const ages3 = age1(2002, 'Victor');
// console.log(ages1, ages2, ages3);



// Coding Challenge
const calcAge = (a, b, c) => (a + b + c) / 3;

// Test1
const dolphins = calcAge(44, 23 ,71);
const koalas = calcAge(65, 54, 49);
