arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];
let output = [];

const customFlatten = (arr, output) => {
  for (let i of arr) {
    if (typeof i === "number") {
      output.push(i);
    } else {
      output = customFlatten(i, output);
    }
  }
  return output;
};

console.log(customFlatten(arr, output));
