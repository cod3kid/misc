const inputBox = document.getElementById("text-box");
const normalText = document.getElementById("normalText");
const debouncedText = document.getElementById("debouncedText");
const throttledText = document.getElementById("throttledText");

const debounce = (fn, delay) => {
  let timer;

  return (text) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(text);
    }, delay);
  };
};

const throttle = (fn, delay) => {
  let isThrottling = false;

  return (text) => {
    if (!isThrottling) {
      isThrottling = true;
      setTimeout(() => {
        fn(text);
        isThrottling = false;
      }, delay);
    }
  };
};

const updateDebouncedText = debounce((text) => {
  debouncedText.innerHTML = text;
}, 1000);

const updateThrottledText = throttle((text) => {
  throttledText.innerHTML = text;
}, 1000);

inputBox.addEventListener("input", (e) => {
  normalText.innerHTML = e.target.value;
  updateDebouncedText(e.target.value);
  updateThrottledText(e.target.value);
});
