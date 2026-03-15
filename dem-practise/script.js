// const months = ["January", "February", "March", "April", "May", "December"];

// // let totalLength = 0;
// // const capitalMonths = months.filter((month, idx, arr) => {
// //   console.log(month.toLowerCase().includes("m"));
// //   return idx > 4;
// // });

// // console.log(capitalMonths);

const students = [
  // another example
  {
    name: "Muhammad",
    age: 26,
  },
  {
    name: "Ammar",
    age: 27,
  },
  {
    name: "Sonia",
    age: 17,
  },
  {
    name: "Ahmed",
    age: 34,
  },
  {
    name: "Shiza",
    age: 15,
  },
];
const adultStudents = students.filter(({ age }) => {
  // console.log(age);
});
// .map(({ name }) => name)
// .filter((student) => student[0].toLowerCase() === "a");
// console.log(adultStudents);

// //Expected Output: 17

// // Expected Output: { apple: 3, banana: 2, orange: 1 }

// // forEvery(fruits, (fruit) => {
// //   console.log(fruit);
// // });

// // function forEvery(array, callbackFunc) {
// //   for (let i = 0; i < array.length; i++) {
// //     callbackFunc(array[i]);
// //   }
// // }
// // // debugger;
// // for (let i = 0; i < fruits.length; i++) {
// //   const delayCheck = function () {
// //     debugger;
// //     console.log(i);
// //   };
// //   setTimeout(delayCheck, 2000);
// // }

// // {
// //   let i = 0;
// //   let j = 1;

// //   debugger;
// //   function cb() {
// //     console.log("Inside callback:", i);
// //   }
// //   console.dir(cb);
// //   setTimeout(cb, 2000);
// //   i++;
// // }
// // for (let i = 0, getI = () => i; i < 3; i++) {
// //   debugger;
// //   console.log(getI());
// // }

// // ii.

// // for (const key in student) {
// //   console.log(`${key}: ${student[key]}`);
// // }

// // for (const fruit of fruits) {
// //   console.log(fruit);
// // }
// // console.log(fruits);
// // const obj = {
// //   firstName: "Muhammad",
// //   lastName: "Madni",
// //   age: 26,
// //   eyeClr: "Light Brown",
// //   city: "Lalamusa",
// // };

// // for (const key in obj) {
// //   console.log(`${key}: ${obj[key]} `);
// // }

// // Alternate:
// // const objKeys = Object.keys(obj);
// // const objValues = Object.values(obj);
// // const objEntries = Object.entries(objValues);
// // // for (const key of objKeys) {
// // //   console.log(`${key}: ${obj[key]} `);
// // // }

// // console.log(objKeys);
// // console.log(objValues);
// // console.log(objEntries);

// Created filter Method own self

function myFilter(array, callback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    if (callback(elem, i, array)) {
      filteredArray.push(elem);
    }
  }
  return filteredArray;
}
