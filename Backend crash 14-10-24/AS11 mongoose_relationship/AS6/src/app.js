const express = require("express");
const app = express();
const connection = require("../config/db");
const PORT = process.env.PORT;
const productRouter = require("../src/Routers/product.Routs");
const categoryRoutes = require("../src/Routers/category.Routes");

app.use(express.json());
app.use("/product", productRouter);
app.use("/category", categoryRoutes);

app.listen(PORT, async () => {
  try {
    await connection();

    console.log(`sever is running on${PORT}`);
  } catch (error) {
    console.log(`error occurred  from sever ${error}`);
  }
});
