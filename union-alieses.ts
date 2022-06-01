// *** Type Allies
type Combinable = number | string; // union type
type ConvertionDescriptor = "as-number" | "as-text"; //literal type
// ***

function combine(
  input1: Combinable,
  input2: Combinable, // union type
  resultConvertion: ConvertionDescriptor // literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConvertion === "as-number") {
  //   return +result;
  // } else {
  //   return result;
  // }
}

const combineAges = combine(36, 20, "as-number");
console.log(combineAges);

const combineStringAges = combine("36", "20", "as-number");
console.log(combineStringAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
