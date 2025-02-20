const upperCaseName = (name) => {
  return name.toUpperCase();
};

const firstName = (name) => {
  return name.split(" ")[0];
};

const reversedName = (name) => {
  return name.split("").reverse().join("");
};

const name = "Itachi Uchiha";

const pipe = (...fns) => {
  return (args) => fns.reduce((acc, curr) => curr(acc), args);
};

const pipeFn = pipe(upperCaseName, firstName, reversedName);

console.log(pipeFn(name));
