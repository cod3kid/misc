function createCounterArray() {
  const counterArray = [];
  for (var i = 0; i < 5; i++) {
    counterArray.push(() => {
      console.log(`Counter: ${i}`);
    });
  }
  return counterArray;
}

const counters = createCounterArray();
counters.forEach((counter) => counter());

/*
Output
5
5
5
5
5

This result is because var has function-level scope, not block-level scope.
The variable i declared in the for loop is shared across all the closure functions.
By the time the functions are called, the for loop has already finished executing, and the final value of i is 5.
*/

/*
Output
0
1
2
3
4

function createCounterArray() {
  const counterArray = [];
  for (let i = 0; i < 5; i++) {
    counterArray.push(() => {
      console.log(`Counter: ${i}`);
    });
  }
  return counterArray;
}

const counters2 = createCounterArray();
counters2.forEach((counter) => counter());

*/

/*
If we use IIFE to create a new scope for each iteration of the loop,
It ensures that each closure function captures its own copy of i with the correct value.

function createCounterArray() {
  const counterArray = [];
  for (var i = 0; i < 5; i++) {
    ((i) => {
      counterArray.push(() => {
        console.log(`Counter: ${i}`);
      });
    })(i);
  }
  return counterArray;
}

const counters = createCounterArray();
counters.forEach((counter) => counter());
*/
