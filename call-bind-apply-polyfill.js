let car = {
  brand: "Ferrari",
  model: "458 Spyder",
};

function purchaseCar(price, currency) {
  return `I bought ${this.brand} ${this.model} for ${price} ${currency}.`;
}

Function.prototype.myBind = function (context = {}, ...firstArgs) {
  context.fn = this;
  return (...args) => context.fn(...firstArgs, ...args);
};

pc = purchaseCar.myBind(car, 1000);
console.log(pc("Lira"));
