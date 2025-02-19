Promise.all = function (input) {
  let result = [];

  return new Promise((resolve, reject) => {
    input.forEach((promise, idx) => {
      promise
        .then((data) => {
          result.push(data);

          if (input.length === idx + 1) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject("Rejected");
        });
    });
  });
};

Promise.all([Promise.resolve("1"), Promise.reject("2")])
  .then(console.log)
  .catch(console.log);
