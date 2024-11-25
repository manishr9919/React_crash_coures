const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const PORT = 8050;
//  const name=require("http-status-codes")
// console.log(name);
const path=require("path")
const app = express();


// Create a write stream (in append mode) for the access.log file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', 'access.log'), { flags: 'a' });

// Setup the logger to write to the access.log file
app.use(morgan('combined', { stream: accessLogStream }));

// app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("welcome to home page");
  console.log(res);
});
app.get("/get-user", (req, res) => {
  return res.status(200).send("user data received");
});
app.post("/add-user", (req, res) => {
  return res.status(201).send("user data added");
});
app.put("/user/:id", (req, res) => {
  return res.status(201).send("update is successful ");
});
app.delete("/user/:id", (req, res) => {
  return res.send("data deletion successful");
});

app.listen(PORT, () => {
  console.log(`app is started on ${PORT}`);
});
