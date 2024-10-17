console.log(5 | 3);

/*
It converts both the numbers into binary and adds them

5 ->   101
3 ->   011
    ---------
       111 -> 7
*/

const r = Math.random,
  a = [(r() * 11) | 0, (r() * 11) | 0, (r() * 11) | 0];

console.log(a);
