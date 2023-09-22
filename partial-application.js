const sum = (a) => {
  return (b, c) => {
    return a + b + c;
  };
};

const base10 = sum(10);
const base100 = sum(100);

console.log(base10(4, 3));
console.log(base100(5, 7));

// Partial Application is a function takes few arguments
// and returns a function that in turn takes rest of the arguments at later time.
