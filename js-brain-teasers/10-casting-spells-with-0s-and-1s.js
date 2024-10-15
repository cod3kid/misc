const x = ~~7.9;
console.log(x);

/*
~ is the bitwise NOT operator. It converts the input into interger, then converts into Binary and 
flips all 0s into 1s and all 1s into 0s

~(7.9) -> 7 -> 3 sets of 1s 00000111 -> 3 sets of 1s 11111000 -> -8 in 32 bit two's complement form
*/
console.log(~7.9);
