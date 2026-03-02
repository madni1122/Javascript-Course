// function outer() {
//   let a = 3;
//   function parentFunc() {
//     let b = 5;
//     return function () {
//       // we can even use anonymous func instead of named func
//       console.log(a + b);
//     };
//   }
//   debugger;
//   return parentFunc();
// }
// const add1 = outer();
// console.dir(add1);

let a = 1;

function outerFunc() {
  let b = 2;

  function innerFunc() {
    let c = 3;

    console.log(a + b + c);
  }

  return innerFunc;
}

let closureFunc = outerFunc();

closureFunc();
