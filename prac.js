const abc = [6, 34, 1, 2, 11, 100];

// console.log(abc.reduce((acc, val) => acc + val, 0));

const customReduce = (arr, initialValue, cb) => {
  let acc = initialValue;

  for (let i of arr) {
    acc = cb(acc, i);
  }

  return acc;
};

console.log(customReduce(abc, 0, (acm, item) => acm + item));
