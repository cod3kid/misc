const request = indexedDB.open("notes");

request.onupgradeneeded((e) => {
  console.log("On upgrade needed");
});

request.onsuccess((e) => {
  console.log("On success");
});

request.onerror((e) => {
  console.log("On error");
})(async () => {
  const data = await indexedDB.databases();
  console.log(data);
})();
