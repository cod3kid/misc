const myPromiseAll = (promises) => {
  const result = [];

  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
      }).catch((err) => reject(err));

      if (promises.length === index + 1) {
        resolve(result);
      }
    });
  });
};

myPromiseAll([Promise.resolve("Hello"), Promise.resolve("World")]).then((res) =>
  console.log(res)
);
