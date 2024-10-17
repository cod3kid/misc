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

/*
First, we get a random number between 0 and 1, We'll mutiply into 11 to get a number
between 0 and 11, Now when we Bitwise OR it, it'll convert into integer first and then perform
the Bitwise OR operation.
*/
