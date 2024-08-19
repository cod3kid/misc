document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Inactive Tab";
  } else {
    document.title = "Active Tab";
  }
});
