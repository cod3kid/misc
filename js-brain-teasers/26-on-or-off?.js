let response = "on",
  state = { on: 1, off: 0 }[response];

console.log(state);

/*
The above is an alternate to the below code

let response = "on";
let state;

if (response === "on"){
  state = 1;
} else if (response === "off"){
  state = 0;
}

console.log(state);
*/
