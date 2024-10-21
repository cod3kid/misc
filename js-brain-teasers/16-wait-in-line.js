console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Knowledge of queues in even loop helps in identifying the solution to the problem
*/
