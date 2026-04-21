const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

const p1 = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    debugger;
    resolve("Promise Resolved");
  });
  rejectBtn.addEventListener("click", () => {
    debugger;
    reject("Promise Rejected");
  });
});
// p1.then((data) => {
//   console.log(data);
//   return "wao";
// })
//   .then((data) => {
//     console.log(data);
//   }) // we can even add more .thens. We do this in real projects using .then again and again. It makes code grow vertically, instead of horizontally.
//   // this is the real Advantage of promises over callback hell made by xhr
//   .catch((data) => {
//     console.log(data);
//   });
const err = p1.catch(() => {
  console.log("hi");
});
console.log(err);
