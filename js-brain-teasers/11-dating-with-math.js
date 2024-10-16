const date = new Date();
const x = date % 100;
console.log(Date.now() % 100);
console.log(x);

/* 
When we apply integer math to Date object, it'll be converted into Unix time
It is same as Date.now() % 100
*/
