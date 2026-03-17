// const nums = [1, 2, 4, 7, 4, 3];
// const reducedNum = myReduce(
//   nums,
//   (acc, val) => {
//     return acc + val;
//   },
//   undefined,
// );
// console.log(reducedNum);
// console.log("*----------------------------------------------------*");

// const reducedNum2 = nums.reduce((acc, val) => {
//   return acc + val;
// }, undefined);
// console.log(reducedNum2);

const names = ["Alice", "Bob", "Charlie"];

const ages = [25, 30, 35];

const cities = ["New York", "Los Angeles", "Chicago"];

const combinedArr = names.map((name, idx) => ({
  name,
  age: ages[idx],
  city: cities[idx],
}));
console.log(combinedArr);

// Expected Output: [

// { name: 'Alice', age: 25, city: 'New York' },

// { name: 'Bob', age: 30, city: 'Los Angeles' },

// { name: 'Charlie', age: 35, city: 'Chicago' }

// ]
