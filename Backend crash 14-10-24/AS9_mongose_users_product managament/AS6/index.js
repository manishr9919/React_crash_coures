const express = require("express");
const connection = require("./config/db");
const userRouter = require("./Router/userRoutes");
const productRouter = require("./Router/productRoutes");

const PORT = 3005;
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`App is running on port ${PORT}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error while connecting to the database: ${error.message}`);
  }
});
