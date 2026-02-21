// let firstName = "Akash";
// let firstName2 = "Aka" + "sh"; // remember! two same strings can also have two diff addresses in memory but values are same like this in previous video.

// Important!
//  but in primitive data types js compare them on basis of value like values are same in both eventhough addresses in memory would be different.

// let userAge = 23;
// let userAge2 = 23;
// let isGraduate = false;
// let hasJob = true;
// let myNull = null;
// let myUndefined = undefined;
// let myEmptyString = "";

// so all these values which are not changing throughout the web, they have specific memory address throughout all websites like we checked for false value on MDN
// like false is in @75 memory address throghout all the webs

// let a = 123456789123456789123456789;
// let b = 123456789123456789123456789n;
// console.log(typeof b);
// console.log(BigInt(a) * b);

// if (true) {
//   const a = "hello";
// }

// let a = helloFunc();
// let b = helloArrowFunc();
// console.log(a);
// console.log(b);
// console.log(hiBro);
// var hiBro = "wao";

// const userInfo = {
//   firstName: "Harlongbi",
//   lastName: "Phangcho",
//   age: 27,
// };
// const userInfo2 = {
//   firstName: "Harlongbi",
//   lastName: "Phangcho",
//   age: 27,
// };

// these both are same object with same values but would be created twice at two different addresses in memory
// let userName1 = ""; // string is a primitive data type and when created two times but with same value same as userName1, then empty string ("") not just in our browser but in any browser of  world epmty strings has specific memory address same across all web or browsers, see next pic
// let userName2 = "";

// const profile = {
//   userName: "madni",
//   details: {
//     city: "Bangalore",
//     state: "Karnataka",
//     pin: 785612,
//     moreDetails: {
//       population: 75656567,
//       area: "789 sq. km",
//     },
//   },
// };
// Object.freeze(profile);
// profile.userName = "Muhammad";
// console.log(profile);
// profile.details.city = "Lahore";

// const count = [0, 1, 2, 3, 4, 10, 7, 3, 12, 25];

// const animals = ["Dog", "cat", "Lion", "Donkey"];
// animals.shift();
// now we found that it converts all strings to it's utf-16 code then compare and sort them so the utf-16 code of "cat" may be heigher than other all that is why it may be lying at the end.

// const fruits = ["Apple", "Banana"];
// const array2 = fruits.slice();

// array2.push("Orange");

// const user1 = {
//   name: "Madni",
//   age: 25,
//   pata: { city: "Lahore", contact: "434235" },
// };
// const user2 = { ...user1 };

// user2.pata.city = "Karachi";

// let num = 54356;

// num = num + 5;
// num = num + 5;
// num = num + 5;
// num = num + 5;

// shortcut
// console.log(num++);
// num /= 3;
// num -= 5;
// num -= 5;

// console.log("Programm started");
// let friends = ["Abdulla", "Asad", "Ammar", "Muhammad", "Usama"];
// let j = 10;
// do {
//   console.log(friends[j]);
//   j++;
// } while (j < friends.length);

// console.log("Programm ended");

// for (let key in friends) {
//   if (key === "lastName") continue;
//   console.log(friends[key]);
// }

// for (let i = 0; i < 25; i += 2) {
//   if (i % 13 === 0) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 2; i <= 13; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// const fruits = ["Mango", "Pineapple", "Oranges"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// function addTwoNum(a, b) {
//   debugger;
//   return a + b;
//   return a;
// }
// const result = addTwoNum(addTwoNum(20, 3), addTwoNum(2.5, 2.5));

// we know there are two phases done one by one whenever a code is run
// 1. Memory Creation (when all variables created in memory first)
// 2. Code Exection (when all variables get actual values)

// so this is also "Execution Context" or rather "Global Execution Context" in js

// we say it Global Execution Context bcz there is another context, whenever functions are created they have thier own "Exection Context" in which the variables of a function are created.
// const userName = "Anurag"; // remember all variables declared with const or let key word stays in script under sources tab, but if var then no script but in global.
// const userAge = 26;
//  what if we had a fuction, would it be hoisted at top of scope? lets see

debugger;
aeoHello();

function aeoHello() {
  const a = 4;
  var b = 8;
  addTwoNumbers(a, b);
}
// and what function like this and we even call it inside another func?
function addTwoNumbers(a, b) {
  return a + b;
}
console.log("Hi");

// now you can understand current order of Call Stack as well

// now take a look carefully, "return" keyword says that go back take Line of Control to where this function was called and place it's returned value there

// just observe when we enter into fuction by moving our line controll step by step with the help of debugger, and meanwhile code exectuion phase or while Js creating "Global Exection Context" it would enter into function and fuction would at that moment would create it's "Local Exection Context" see next pic
