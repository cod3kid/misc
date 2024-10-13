let key = 2049;
(function () {
  "use strict";
  console.log(this.key);
})();

console.log(this);

// It throws an error in strict mode as 'this' is {} in Node.js
// In non-strict mode, it prints undefined

// ES2020 introduced globalThis for all three different env (Browser,Nodejs n Web Workers)
console.log(globalThis);
// <ref *1> Object [global] {...} for Node.js
// Window {...} for Browser
// DedicatedWorkerGlobalScope {...} for Web Workers
