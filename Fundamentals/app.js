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
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins the 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins the 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);



// Arrays
// how to get the last element of an array 
// let friends = ['nnnn', 'fffff', 'ddddd', 'ddddddd', 'uururur', 'dhdhdhdhd', 'djjjdjdd'];
// console.log(friends[friends.length - 1]);
// if(friends.includes('nnnn')) {
//     console.log('u have a friend name nnnn');
// } else {
//     console.log('no such friend');
// }

// function birthAge(birthYear) {
//         return 2021 - birthYear;
//     }

// const years = [1997, 1990, 1994];

// const ages = [birthAge(years[0]), birthAge(years[1]), birthAge(years[years.length - 1])];
// console.log(ages);



// Objects
// const alfred = {
//     firstName: 'Alfred',
//     lastName: 'Loveday',
//     age: 2021 - 1996,
//     job: 'Software Developer',
//     friends: ['Joe', 'Austino', 'Vic']
// };

// console.log(`${alfred.firstName} has ${alfred.friends.length} friends, and his best friend is called ${alfred.friends[0]}`);

// alfred.location = 'Kano';
// alfred['twitter'] = '@loveday_alfred';
// console.log(alfred);

// console.log(alfred.friends);
// console.log(alfred['age']);

// const interestedIn = prompt('What do u wanna know about alfred...Choose btw firstName, lastName, age, job, friends');
// console.log(alfred[interestedIn]);
// if(alfred[interestedIn]) {
//     console.log(alfred[interestedIn]);
// } else {
//     console.log('Invalid Input');
// }

// const alfred = {
//     firstName: 'Alfred',
//     lastName: 'Loveday',
//     birthYear: 2021 - 1996,
//     job: 'Software Developer',
//     friends: ['Joe', 'Austino', 'Vic'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old Software Developer and he has 
//         ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(alfred.getSummary());
// console.log(alfred.calcAge());

// console.log(alfred.age);
// console.log(alfred.age);
// console.log(alfred.age);


// Coding Challenge
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     clacBMI: function() {
//         const BMI = this.mass / (this.height * this.height);
//         return BMI;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.92,

//     clacBMI: function() {
//         const BMI = this.mass / (this.height * this.height);
//         return BMI;
//     }
// }

// const names = `${john.fullName}'s BMI ${john.clacBMI()} is higher than ${mark.fullName}'s BMI ${mark.clacBMI()}`;
// console.log(names);



// Loops
for(let i = 1; i <= 10; i++) {
    console.log(`am cumming love ${i}`);
}