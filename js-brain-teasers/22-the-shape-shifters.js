const a = "f" < {};
const b = "F" < {};

console.log(a);
console.log(b);

/*
JavaScript converts {} into a string ie, [Object object] and then
does it lexicographical comparison
*/
