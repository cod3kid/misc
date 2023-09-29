const controller = new AbortController();

const initWebSocket = (url, signal) => {
  const ws = new WebSocket(url);

  if (signal.aborted) {
    ws.close();
  }

  if (signal.reason) {
    console.log("Aborting due to boredom");
  }

  signal.addEventListener("abort", () => ws.close(), { once: true });

  return ws;
};

initWebSocket("ws://example.com", controller.signal);
setTimeout(() => {
  controller.abort("Aborting due to boredom");
}, 3000);
