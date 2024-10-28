const arr = [1, 8, NaN, 15, ""];

const newArr = arr.filter(function (item) {
  return !!item;
});

console.log(newArr);

// !! is a shortcut for Boolean()
