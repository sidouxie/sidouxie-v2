const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT} , Happy Hacking`)
);
