const country = {
  name: "Netherlands",
};

const name = Symbol("name");
country[name] = "Holland";
console.log(country["name"]);

// Symbols let us define hidden or private properties within objects
