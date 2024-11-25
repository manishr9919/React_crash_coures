const express = require("express");
const app = express();
const PORT = 3000;

const userRouts = require("./users");
const todosRouts = require("./todos");
app.use(express.json());

app.use("/todos", todosRouts);
app.use("/users", userRouts);

app.listen(PORT, () => {
  console.log(`server is running on http:// localhost:${PORT}`);
});
