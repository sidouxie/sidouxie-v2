const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT} , Happy Hacking`)
);
