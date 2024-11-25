const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;
const morgan = require("morgan");
const path = require("path");
var accessLogStream = fs.createWriteStream(
  path.join(
    __dirname,

    "src",
    "access.log"
  ),
  { flags: "a" }
);


app.use(
  morgan(
    `:date[clf] :method,:url,:res[content-length]-:status,:http-version,:response-time ms`,
    { stream: accessLogStream }
  )
);

app.get("/", (req, res) => {
  res.status(200).json({ massage: "this is home page" });
});

app.get("/get-user", (req, res) => {
  res.status(200).json({ massage: "user get successful" });
});
app.post("/add-user", (req, res) => {
  res.status(201).json({ massage: "added new user with successfully" });
});
app.put("/user/:id", (req, res) => {
  res.status(201).json({ massage: "user updated" });
});
app.delete("/user/:id", (req, res) => {
  res.status(200).json({ massage: "user deleted successfully" });
});
app.listen(PORT, () => {
  console.log(`app is running port ${PORT}`);
});
