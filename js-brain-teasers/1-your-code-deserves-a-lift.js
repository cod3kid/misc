let temp = 25;

function displayTemperature() {
  console.log(`Current temperature: ${temp} °C`);
}

function forecastTemperature() {
  console.log(`Expected temperature: ${temp} °C`);
  var temp = 28;
}

displayTemperature(); // 25
forecastTemperature(); // undefined

/* undefined because inner temp overshadows outer temp. And var is hoisted in a different way,
    That's why it's undefined. If it was let, then the compiler will throw a ReferenceError
*/
