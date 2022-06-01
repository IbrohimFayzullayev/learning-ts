function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result is: " + num);
}

printResult(add(12, 7));

// function types 👇 *** //

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 6;
console.log(combineValues(8, 8));

// ******* //

// function types and callbacks  ***** //

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  let result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
