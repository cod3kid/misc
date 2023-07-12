const input = document.getElementById("input");
const defaultText = document.getElementById("defaultText");
const debounceText = document.getElementById("debounceText");
const throttleText = document.getElementById("throttleText");

function debounce(fn, delay) {
  let timer;

  return (text) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(text), delay);
  };
}

function throttle(fn, delay) {
  let flag = false;
  let waitingArgs;

  timeoutFunc = () => {
    if (waitingArgs == null) {
      flag = false;
    } else {
      fn(waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (text) => {
    if (flag) {
      waitingArgs = text;
      return;
    }

    fn(text);

    flag = true;

    setTimeout(timeoutFunc, delay);
  };
}

const updateDebounceText = debounce((text) => {
  debounceText.innerText = text;
}, 1000);

const updateThrottleText = throttle((text) => {
  throttleText.innerText = text;
}, 1000);

input.addEventListener("input", (e) => {
  defaultText.innerText = e.target.value;

  updateThrottleText(e.target.value);
  updateDebounceText(e.target.value);
});
