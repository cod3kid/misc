class Builder {
  constructor() {
    this.total = 0;
  }

  add(a) {
    this.total += a;
    return this;
  }

  subtract(a) {
    this.total -= a;
    return this;
  }

  multiply(a) {
    this.total *= a;
    return this;
  }
}

const ao = new Builder();

const result = ao.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

// Alternate approach

const calc = {
  total: 0,
  add: function (a) {
    this.total += a;
    return this;
  },
  subtract: function (a) {
    this.total -= a;
    return this;
  },
  multiply: function (a) {
    this.total *= a;
    return this;
  },
};

const result2 = calc.add(10).multiply(5).subtract(30).add(20);
console.log(result2.total);
