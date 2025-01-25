Object.prototype.get = function (key, defaultValue) {
  const allKeys = key.split(".");
  let current = this;
  let i = 0;
  while (true) {
    if (!current[allKeys[i]]) {
      return defaultValue;
    }
    current = current[allKeys[i]];

    i++;
    if (i === allKeys.length) return current;
  }
};

person1 = {
  name: "John Wick",
  age: 21,
  address: {
    city: "Bangalore",
    street: "ABC",
  },
};

console.log(person1.get("address.city", "Meowown"));
