const addFive = (a) => {
  return a + 5;
};

const subtractTwo = (a) => {
  return a - 2;
};

const multiplyFour = (a) => {
  return a * 4;
};

const compose = (...fns) => {
  return (args) => fns.reduceRight((curr, fn) => fn(curr), args);
};

const composedFn = compose(addFive, subtractTwo, multiplyFour);
console.log(composedFn(6));
