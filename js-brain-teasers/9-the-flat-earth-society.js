const nestedArray = [
  "apple",
  ["blueberry", "blackberry"],
  ["tangerine", "orange"],
  "grape",
];

const flattenedArray = [].concat.apply([], nestedArray);
console.log(flattenedArray);
console.log([].concat(...nestedArray)); // More concise approach without apply method
