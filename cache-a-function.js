const intenseCalculation = (num1, num2) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num1 * num2;
};

const memoizeFn = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (!cache[key]) {
      cache[key] = fn.call(this, ...args);
    }
    return cache[key];
  };
};

const memoizedIntenseCalculation = memoizeFn(intenseCalculation);
console.time("first");
console.log(memoizedIntenseCalculation(3, 4));
console.timeEnd("first");

console.time("second");
console.log(memoizedIntenseCalculation(3, 4));
console.timeEnd("second");
