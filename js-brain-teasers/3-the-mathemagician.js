const largeNumber = Math.pow(10, 16);
const smallNumber = 1;

console.log(largeNumber + smallNumber);

/*
JS can handle integers between -9007199254740991 and 9007199254740991
without losing any precision.
*/

console.log(Number.MIN_SAFE_INTEGER); //  -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //  9007199254740991
console.log(9999999999999999); //  10000000000000000
