const sum = (a, b, c) => a + b + c;

const curry = (fn) => {
  return function curriedFn(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    }
    return (...next) => {
      return curriedFn(...args, ...next);
    };
  };
};

const curriedSum = curry(sum);

console.log(curriedSum(4)(50)(20));
