const express = require("express");
const connection = require("./config/db");
const userRoute = require("./Routes/UserRoute");
const productRoute = require("./Routes/ProductRoute");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(PORT, async () => {
  console.log(`app is started of ${PORT}`);
  await connection();
});
