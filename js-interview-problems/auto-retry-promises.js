const { rejects } = require("assert");
const { resolve } = require("path");

const fetchData = () => {
  let count = 0;
  return () => {
    if (count++ > 5) {
      return Promise.resolve("Success");
    } else {
      return Promise.reject("Rejected");
    }
  };
};

const fetchDataWithRetry = (fetchData, retryLimit = 0) => {
  return new Promise((resolve, reject) => {
    (function retry() {
      fetchData()
        .then((data) => resolve(data))
        .catch((error) => {
          if (retryLimit-- > 0) {
            // console.log("Retying...");
            retry();
          } else {
            reject(error);
          }
        });
    })();
  });
};

fetchDataWithRetry(fetchData(), 6).then(console.log).catch(console.log);
