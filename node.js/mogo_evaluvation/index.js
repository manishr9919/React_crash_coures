const express = require("express");
const connection = require("./config/db");
const courseRouter = require("./Routes/courseRoute");
const PORT = 8080;
const app = express();
app.use(express.json());
app.use("/courses", courseRouter);

app.listen(PORT, async () => {
  try {
    console.log("app is started ");
    await connection;
    console.log("connection stablish ");
  } catch (error) {
    console.log(`error connection not stablish ${error}`);
  }
});
