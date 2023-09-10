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
  return (args) => fns.reduceRight((arg, fn) => fn(arg), args);
};

const pipe = (...fns) => {
  return (args) => fns.reduce((arg, fn) => fn(arg), args);
};

const evaluate = compose(addFive, subtractTwo, multiplyFour);
const evaluatePipe = pipe(addFive, subtractTwo, multiplyFour);

console.log(evaluate(5));
console.log(evaluatePipe(5));
