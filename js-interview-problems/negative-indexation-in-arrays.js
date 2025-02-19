const arr = [1, 2, 3, 4, 5, 6, 7];
const arrProxy = new Proxy(arr, {
  get: function (target, key) {
    let intKey = parseInt(key);

    if (intKey >= 0) {
      return target[key];
    }

    for (let i = target.length; i >= 0; i--) {
      if (intKey == 0) {
        return target[i];
      }
      intKey++;
    }
  },
  set: function (target, key, value) {
    let intKey = parseInt(key);

    if (intKey >= 0 && intKey < target.length) {
      target[key] = value;
      return;
    } else if (intKey >= target.length) {
      throw Error("Out of bounds");
    }

    for (let i = target.length; i >= 0; i--) {
      if (intKey == 0) {
        target[i] = value;
        return;
      }
      intKey++;
    }
    throw Error("Out of bounds");
  },
});

arrProxy[-1] = 20;
console.log(arr);
