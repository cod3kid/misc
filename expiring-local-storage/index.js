const myLocalStorage = {
  setItem: (key, value, expiry = 1000) => {
    window.localStorage.setItem(key, value);
    setTimeout(() => {
      window.localStorage.removeItem(key);
    }, expiry);
  },

  getItem: (key) => {
    return window.localStorage.getItem(key);
  },
};

myLocalStorage.setItem("meow", "zeow", 2000);
console.log(myLocalStorage.getItem("meow"));

setTimeout(() => {
  console.log(myLocalStorage.getItem("meow"));
}, 2000);
