const myPromiseAll = (promises) => {
  const result = [];

  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);

        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
};

myPromiseAll([
  Promise.resolve("Hello"),
  Promise.resolve("Return"),
  Promise.reject("Reject"),
])
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
