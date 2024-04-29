function calculateArea(length, width) {
  return length * width;
}

function calculateArea(length) {
  return length * length;
}

console.log(calculateArea(4, 6)); // 16

/*
We cannot have function overloading (compile time polymorphism) like this in JS
*/

function calculateArea(length, width) {
  if (width === undefined) {
    return length * length;
  } else {
    return length * width;
  }
}

console.log(calculateArea(5));
console.log(calculateArea(4, 6));
