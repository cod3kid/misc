const throttlePromises = (apiList, batchSize) => {
  let result = [];
  let apiIdx = 0;
  return new Promise((resolve, reject) => {
    (function fetchData() {
      const start = apiIdx;
      const end = apiIdx + batchSize;

      const nextApiCalls = apiList.slice(start, end);
      const nextApiPromises = nextApiCalls.map((apiCall) => apiCall());

      Promise.all(nextApiPromises)
        .then((res) => {
          result.push(...res);

          if (result.length === apiList.length) {
            resolve(result);
          } else {
            apiIdx = end;
            fetchData();
          }
        })
        .catch((ex) => {
          reject(ex);
        });
    })();
  });
};

const getRandomTimer = () => Math.round(Math.random * 1000);

const getFulfillingPromise = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, getRandomTimer());
  });
};

const getRejectingPromise = (value) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(value);
    }, getRandomTimer());
  });
};

const apiList = new Array(20)
  .fill(null)
  .map((_, idx) => () => getFulfillingPromise(idx + 1));

const apiList2 = new Array(20)
  .fill(null)
  .map((_, idx) => () => getRejectingPromise(idx + 1));

throttlePromises(apiList2, 5)
  .then((data) => {
    console.log("Resolved with: ", data);
  })
  .catch((ex) => {
    console.log("Rejected with: ", ex);
  });
