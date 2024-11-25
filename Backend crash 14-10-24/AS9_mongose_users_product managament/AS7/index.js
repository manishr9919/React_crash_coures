const express = require("express");
const movieRoute=require("./Routes/moviesRoutes")
require("dotenv").config();
const PORT = process.env.PORT;
const connection = require("./config/config");
const app = express();

app.use(express.json())
app.use("/movie",movieRoute)
app.listen(PORT, async () => {
  try {
    await connection();

    console.log(`server is running on ${PORT}`);
  } catch (error) {
    console.log(error)
  }
});
