!(function () {
  const name = "john";
  const age = 20;
})();

const capitalizedName = name[0].toUpperCase() + name.slice(1);
console.log(capitalizedName); // Reference Error

/*
Different forms of IIFE
*/

// Traditional Enclosure
(function () {
  console.log("meow");
})();

// Traditional with Arrow Fn Enclosure
(() => {
  console.log("meow");
})();

// Unary Operator Enclosure
!(function () {
  console.log("meow");
})();

// Grouping Enclosure
(function () {
  console.log("meow");
})();

// Function Declaration Enclosure
(function namedIIFE() {
  console.log("meow");
})();
