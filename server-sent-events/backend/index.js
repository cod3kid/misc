const app = require("express")();

app.get("/stream", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/event-stream");

  setInterval(() => {
    // We need this prefix "data: " and postfix "\n\n" for it to stream
    res.write("data: " + Date.now() + "\n\n");
  }, 500);
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
